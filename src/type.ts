export interface Image {
  cover_photo: {
    id: string;
    urls: {
      small: string;
      regular: string;
    };
    alt_description: string;
    likes: number;
    slug: string;
  };
}
