
export const demoLandingData = {
  sections: [
    {
      id: "services",
      headline: "Services",
      readMoreLink: "/services",
      cards: [
        {
          type: 'TeaserCard',
          id: "1",
          headline: "Software Engineering",
          destLink: "self",
          descriptionImg: "img/software_engineering.png",
        },
        {
          type: 'TeaserCard',
          id: "2",
          headline: "Consulting",
          destLink: "self",
          descriptionImg: "/img/consulting.png",
        },
      ],
    },
    {
      id: "projects",
      headline: "Projects",
      readMoreLink: "/projects",
      cards: [
        {
          type: 'TeaserCard',
          id: "3",
          headline: "Project 1",
          destLink: "self",
          descriptionImg: "/img/automotive.png",
          descriptor: "Automotive",
          isRoundImage: true,
        },
        {
          type: 'TeaserCard',
          id: "4",
          headline: "Project 2",
          destLink: "self",
          descriptionImg: "/img/aviation.png",
          descriptor: "Aviation",
          isRoundImage: true,
        },
      ],
    },
    {
      id: "about",
      headline: "About",
      readMoreLink: "/about",
      cards: [
        {
          type: 'ProfileContentCard',
          id: "5",
          profileImg: "/img/profile1.png",
          imgAlt: "Profile Picture Christoph Frischmuth",
          name: "Christoph Frischmuth",
          degree: "B.Sc. Applied Computer Science",
          position: "Freelancer - Software Engineer",
          offers: ["Web Development", "Consulting", "Software Design"],
          interests: ["All kinds of technology", "Automation", "Aviation"],
        },
      ],
    },
  ],
};

export const newDemo = {
  sections: [
    {
      id: "services",
      headline: "Services",
      readMoreLink: "/services",
      cards: ["1", "2"],
    },
    {
      id: "projects",
      headline: "Projects",
      readMoreLink: "/projects",
      cards: ["3", "4"],
    },
    {
      id: "about",
      headline: "About",
      readMoreLink: "/about",
      cards: ["5"],
    },
  ],
}

// Definiere den Literal-Typ für das `type`-Feld
type CardType = "TeaserCard" | "ProfileContentCard" | "ContentCard";

// Definiere die Struktur deiner Karten
interface ICard {
  id: string;
  target: string;
  type: CardType; // Das `type`-Feld ist streng auf bestimmte Werte beschränkt
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


export const newCards: ICard[] = [
    {
      type: 'TeaserCard',
      id: "1",
      headline: "Software Engineering",
      target: "self",
      descriptionImg: "img/software_engineering.png",
    },
    {
      type: 'TeaserCard',
      id: "2",
      headline: "Consulting",
      target: "self",
      descriptionImg: "/img/consulting.png",
    },
    {
      type: 'TeaserCard',
      id: "3",
      headline: "Project 1",
      target: "self",
      descriptionImg: "/img/automotive.png",
      descriptor: "Automotive",
      isRoundImage: true,
    },
    {
      type: 'TeaserCard',
      id: "4",
      headline: "Project 2",
      target: "self",
      descriptionImg: "/img/aviation.png",
      descriptor: "Aviation",
      isRoundImage: true,
    },
    {
      type: 'ProfileContentCard',
      id: "5",
      target: "self",
      profileImg: "/img/profile1.png",
      imgAlt: "Profile Picture Christoph Frischmuth",
      name: "Christoph Frischmuth",
      degree: "B.Sc. Applied Computer Science",
      position: "Freelancer - Software Engineer",
      offers: ["Web Development", "Consulting", "Software Design"],
      interests: ["All kinds of technology", "Automation", "Aviation"],
    },
  ]