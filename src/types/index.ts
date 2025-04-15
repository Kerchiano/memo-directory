import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Meme {
  id: number;
  title: string;
  image: string;
  likes: number;
}
