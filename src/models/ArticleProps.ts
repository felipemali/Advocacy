export type textProps = {
  text: string;
  subtitle: string;
};
export type Article = {
  title: string;
  date: string;
  content?: textProps[];
  img: string;
  imgLarge?: string;
  id: number;
};
