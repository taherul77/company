import { ReactNode } from "react";

export interface BannerProps {
  img: any;
  heading: string;
}
export interface RevolutionBannerProps {
  img?: any;
  heading?: string;
  backgroundImage?:string
}
export interface ExpertiseProps {
  img: any;
}
export interface ExpertiseSectionProps {
  title?: string;
  subTitle?: string;
  subSubTitle?: string;
}
export interface ExpertiseSectionImageLeftProps {
  img: any;
}
export interface SectionImageLeftProps {
  img: any;
}
export interface ExpertiseSectionImageRightProps {
  img: any;
}

export interface SectionProps {
  heading: string;
}

export interface SectionTitleProps {
  heading: string;
  className?:string;
  className2?:string;
  subTitle?:string
}

export interface WrapperProps {
  children?: ReactNode;
  className?: string;
}
export interface ExpertiessWrapperProps {
  children: ReactNode;
  className?: string;
}
export interface SolutionSectionTitleProps{
  title?:string;
  className?:string;
  subSubTitle?:string
  className2?:string
  translateX?:string
}
export interface SectionEnimationProps{
  children?:string;
  className?:string
  className2?:string
  translateX?:string
}
export interface BrandImageProps{
  hoverImage?:any;
  normalImage?:any
}

