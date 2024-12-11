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

export interface SliderType {
  children: ReactNode;
    styling?: String;
    dotsValue: Boolean;
    slidesNumber : Number;
}


export interface menuItems {
  menu: string;
  link: string;
}
export interface hero {
  title: string;
  subtitle: string;
}
export interface Footer{
  title: string;
  navitems?: Object[];
  link?:String;
}
export interface Buttons{
  appLinks?: object[];

}

export interface navitems{
  title: string;
  link: string;
}

export interface Content {
  menuItems: menuItems[];
  Footer: Footer[];
  Buttons: Buttons[];
}

export interface LegalPages{
  title?: string
  heading?: String;
  content?: String;
  content2?:string;
  content3?:string;
  children:ReactNode;
}
export interface LegalPagesDescription{
  
  content: String;
 
}

