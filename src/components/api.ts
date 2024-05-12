import axios from "axios";
import { Image } from "../type";
interface UnsplashResponse {
  results: [Image];
  total_pages: number;
  data: string;
}

export const requestPhotosByQuery = async (
  queryImg: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(
    `https://api.unsplash.com/search/collections?page=${page}&query=${queryImg}&client_id=OZ5BK-hec_J2CWVr_VVb6tSz2_fonX4WtGVNsk-iLCg`
  );
  console.log(data);
  return data;
};
