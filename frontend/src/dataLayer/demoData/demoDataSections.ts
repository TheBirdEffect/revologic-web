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
      cards: ["5" , "6", "7"],
    },
  ],
}

export const newCards = [
    {
      type: 'TeaserCard',
      id: "1",
      headline: "Software Engineering",
      target: "/services/software-engineering",
      descriptionImg: "img/software_engineering.png",
    },
    {
      type: 'TeaserCard',
      id: "2",
      headline: "Consulting",
      target: "/services/consulting",
      descriptionImg: "/img/consulting.png",
    },
    {
      type: 'TeaserCard',
      id: "3",
      headline: "Project 1",
      target: "/projects/project-1",
      descriptionImg: "/img/automotive.png",
      descriptor: "Automotive",
      isRoundImage: true,
    },
    {
      type: 'TeaserCard',
      id: "4",
      headline: "Project 2",
      target: "/projects/project-2",
      descriptionImg: "/img/aviation.png",
      descriptor: "Aviation",
      isRoundImage: true,
    },
    {
      type: 'ProfileContentCard',
      id: "5",
      target: "/profile",
      profileImg: "/img/profile1.png",
      imgAlt: "Profile Picture Christoph Frischmuth",
      name: "Christoph Frischmuth",
      degree: "B.Sc. Applied Computer Science",
      position: "Freelancer - Software Engineer",
      offers: ["Web Development", "Consulting", "Software Design"],
      interests: ["All kinds of technology", "Automation", "Aviation"],
    },
    {
      type: 'ContentCard',
      id: "6",
      target: "/about/technologies",
      headline: "Technologies",
      content: "Um flexibel und präzise auf Ihre Anforderungen eingehen zu können, setzen ich auf eine breite Palette moderner Technologien:",
      gallery: 'techStack',      
    },
    {
      type: 'ContentCard',
      id: "7",
      target: "/about/teaser",
      headline: "Ein persönlicher Ansatz",
      content: "Jeder Kunde und jedes Projekt ist einzigartig. Deshalb lege ich großen Wert darauf, eine vertrauensvolle und offene Kommunikation zu pflegen. Bei mir sind Sie nicht nur eine Nummer, sondern ein geschätzter Partner. Gemeinsam entwickeln wir Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind – funktional, benutzerfreundlich und zukunftssicher. Ich freue mich darauf, gemeinsam mit Ihnen Ihre Softwareträume zu verwirklichen. Lassen Sie uns die digitale Zukunft gestalten und innovative Lösungen schaffen, die Ihr Unternehmen voranbringen. Treten Sie mit mir in Kontakt und starten Sie noch heute Ihr nächstes großes Projekt.",
    }
  ]

