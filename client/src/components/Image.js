import React from 'react';

const Image = ({ image }) => {
  return (
    <a href={image.links.html} target='_blank' rel='noopener noreferrer'>
      <img className='single-photo' src={image.urls.thumb} alt='' />
    </a>
  );
};

export default Image;
