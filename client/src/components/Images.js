import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import Image from './Image';

const Images = () => {
  const count = 30;
  const [images, setImages] = useState([]);
  const [start, setStart] = useState(1);

  // Fetch 30 images to start
  useEffect(() => {
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(res.data));
    setStart((prevState) => prevState + count);
    //eslint-disable-next-line
  }, []);

  const fetchImages = () => {
    setStart((prevState) => prevState + count);
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then((res) => setImages(images.concat(res.data)));
  };

  return (
    <div className='images'>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {images.map((img) => (
          <Image key={img.id} image={img} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Images;
