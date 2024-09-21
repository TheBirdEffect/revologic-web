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
    {
      id: "about",
      headline: "About",
      readMoreLink: "/about",
      cards: [
        {
          type: "ProfileContentCard",
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
