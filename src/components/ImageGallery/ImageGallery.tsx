import React, { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import { Image } from "../../type";
// import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[];
  onClick: (index: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images, onClick }) => {
  return (
    <ul>
      {Array.isArray(images) &&
        images.map((image, index) => {
          return (
            <li key={index}>
              <ImageCard image={image} onClick={onClick} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;

{
  /* <ul className={css.galleryList}></ul> */
}
//  <li key={index} className={css.galleryListItem}></li>
