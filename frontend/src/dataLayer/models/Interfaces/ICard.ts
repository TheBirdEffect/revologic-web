export interface ICard {
  id: string;
  target: string;
  type: "TeaserCard" | "ProfileContentCard" | "ContentCard";
  headline?: string;
  descriptionImg?: string;
  profileImg?: string;
  isRoundImage?: boolean;
  imgAlt?: string;
  descriptor?: string;
  name?: string;
  degree?: string;
  position?: string;
  offers?: string[];
  interests?: string[];
}
