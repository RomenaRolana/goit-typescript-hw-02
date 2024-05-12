// import css from "./ImageCard.module.css";

import React, { FC } from "react";
import { Image } from "../../type";

interface ImageCardProps {
  image: Image;
  onClick: (index: string) => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      <img
        src={image.cover_photo.urls.small}
        alt={image.cover_photo.alt_description}
        onClick={() => onClick(image.cover_photo.id)}
      />
    </div>
  );
};

export default ImageCard;

//  <img
//    src={image.cover_photo.urls.small}
//    alt={image.alt_description}
//    className={css.galleryImg}
//    onClick={() => onClick(image)}
//  />;
