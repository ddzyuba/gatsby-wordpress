export const getBlogPaginatedHref = (nextPage, category) => {
  if (category) {
    return nextPage === 1
      ? `${category}`
      : `${category}page/${nextPage}/`;
  }

  return nextPage === 1 ? '/blog/' : `/blog/page/${nextPage}/`;
};