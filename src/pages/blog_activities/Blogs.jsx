import React, { useState } from "react";
import "./Blogs.css";
import { images } from "./images";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

function Blogs() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Blogs;
