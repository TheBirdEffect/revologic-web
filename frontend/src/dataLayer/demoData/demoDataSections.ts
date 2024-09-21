export const demoLandingData = {
  sections: [
    {
      id: "services",
      headline: "Services",
      readMoreLink: "/services",
      cards: [
        {
          type: "TeaserCard",
          id: "1",
          headline: "Software Engineering",
          destLink: "self",
          descriptionImg: "img/software_engineering.png",
        },
        {
          type: "TeaserCard",
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
          type: "TeaserCard",
          id: "3",
          headline: "Project 1",
          destLink: "self",
          descriptionImg: "/img/automotive.png",
          descriptor: "Automotive",
          isRoundImage: true,
        },
        {
          type: "TeaserCard",
          id: "4",
          headline: "Project 2",
          destLink: "self",
          descriptionImg: "/img/aviation.png",
          descriptor: "Aviation",
          isRoundImage: true,
        },
      ],
    },
  ],
};
