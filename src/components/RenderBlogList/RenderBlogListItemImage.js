import React, { useState, useEffect } from 'react';
import { RenderBlogListItemImg } from './RenderBlogListStyles';

const RenderBlogListItemImage = ({ databaseId }) => {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    fetch(`https://we3travel.com/wp-json/wp/v2/posts/${databaseId}`)
      .then(response => response.json())
      .then(data => {
        if (data.featured_image_urls !== undefined) {
          setImageURL(data.featured_image_urls.thumbnail[0]);
        }
      })
  }, []);

  if (imageURL) {
    return <RenderBlogListItemImg src={imageURL} />
  }

  return null;
};

export default RenderBlogListItemImage;