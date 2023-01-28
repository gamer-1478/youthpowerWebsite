import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { Photos } from "./images";

import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Images() {
  const [index, setIndex] = useState(-1);
  const [images1, setImages1] = useState([]);
  const [slides, setSlides] = useState([]);
  const handleClick = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    async function fetchData() {
      const res = await Photos();
      console.log(res);
      setImages1(res);
      setSlides(
        res.map(({ original, width, height }) => ({
          src: original,
          width,
          height,
        }))
      );
    }
    fetchData();
  }, []);

  return (
    slides.length > 0 && (
      <div>
        <h1>
          <center>Gallery</center>
        </h1>
        <Gallery
          images={images1}
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
    )
  );
}

export default Images;
