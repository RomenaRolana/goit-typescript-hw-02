import React, { FC } from "react";
import { Image } from "../../type";
interface LoadMoreProps {
  loadMore: () => void;
  images: Image[];
}
const LoadMore: FC<LoadMoreProps> = ({ loadMore, images }) => {
  return (
    <div>
      {images.length > 0 && <button onClick={loadMore}>Load More</button>}
    </div>
  );
};

export default LoadMore;
