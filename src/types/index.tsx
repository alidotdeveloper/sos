import { ReactNode } from "react";

export interface DiscoverProps {
  heading?: string;
  redHeading?: string;
  headingSize?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "xl"
    | "lg"
    | "md"
    | "sm"
    | null;
  subheading?: string;
  image?: string;
  bg?: string;
  children: ReactNode;
    Styling?: String;
  
}
