const path = require('path');
const _ = require('lodash');

const { blogCategories } = require('./src/utils/allBlogCategories');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  return graphql(`
    {
      allWpPost {
        nodes {
          title
          slug
          content
          date
          status
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      //throw result.errors;
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    // Create blog paginated pages
    const allPosts = result.data.allWpPost.nodes;
    const posts =
        process.env.NODE_ENV === 'production'
          ? _.filter(allPosts, (node) => node.status === 'publish')
          : allPosts;
    const postsPerPage = 12;

    const numPages = Math.ceil((posts.length - 1) / postsPerPage);

    Array.from({ length: numPages }).forEach((el, i) => {
      createPage({
        path: i === 0 ? `/blog/` : `/blog/page/${i + 1}/`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage + 1,
          numPages,
          currentPage: i + 1,
        },
      });
    });

    // Create blog category paginated pages
    Object.entries(blogCategories).map(([, categoryValue]) => {
      const filteredPosts = posts.filter(
        (post) =>
          post.categories.nodes &&
          post.categories.nodes.find(
            node => node.slug === categoryValue.slug
          )
      );

      let numFilteredPages = 1;

      if ( filteredPosts.length === 1 ) {
        numFilteredPages = 1;
      } else {
        numFilteredPages = Math.ceil(
          (filteredPosts.length - 1) / postsPerPage
        );
      }

      return Array.from({ length: numFilteredPages }).forEach((el, i) => {

        let skip = 0;
        if (numFilteredPages === 1) {
          skip = 0;
        } else {
          skip = i * postsPerPage + 1;
        }

        createPage({
          path:
            i === 0
              ? `${categoryValue.pageURL}`
              : `${categoryValue.pageURL}page/${i + 1}/`,
          component: path.resolve('./src/templates/blog-list.js'),
          context: {
            limit: postsPerPage,
            skip: skip,
            numPages: numFilteredPages,
            currentPage: i + 1,
            categoryName: categoryValue.name,
            categorySlug: categoryValue.slug,
            categoryImage: categoryValue.image,
            categoryURL: categoryValue.pageURL
          },
        });
      });

    });

    // Create blog post pages.
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
          // Path for this page — required
          path: `${node.slug}`,
          component: blogPostTemplate,
          context: {
            // Add optional context data to be inserted
            // as props into the page component.
            //
            // The context data can also be used as
            // arguments to the page GraphQL query.
            //
            // The page "path" is always available as a GraphQL
            // argument.
            title: node.title,
            date: node.date,
            content: node.content
          },
        });
    });

    // Create custom Search page
    const postsArray = [];
    result.data.allWpPost.nodes.forEach((node, index) => {
      postsArray.push({
        title: node.title,
        slug: node.slug
      });
    })

    createPage({
      path: `/search/`,
      component: path.resolve(`./src/templates/search.js`),
      context: {
        postsArray: postsArray,
        options: {
          indexStrategy: `Prefix match`,
          searchSanitizer: `Lower Case`,
          TitleIndex: true,
          SearchByTerm: true,
        },
      },
    });

  });

  
}