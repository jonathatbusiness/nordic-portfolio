export type GalleryCategory =
  | "all"
  | "places"
  | "culture"
  | "history"
  | "football"
  | "nature";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: Exclude<GalleryCategory, "all">;
  image: string;
  imageAlt: string;
};
