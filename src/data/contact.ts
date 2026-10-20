export interface ContactConfig {
  name: string;
  publicDisplayName: string;
  creativeIdentity: string;
  email: string;
  ownerEmail: string;
  motto: string;
  philosophy: string[];
  location: string;
  institution: string;
  profiles: {
    github: string;
    linkedin: string;
    instagram: string;
    behance: string;
  };
  labels: {
    github: string;
    linkedin: string;
    instagram: string;
    behance: string;
  };
}

export const contactConfig: ContactConfig = {
  name: "Harshad Rajaram Mane",
  publicDisplayName: "Harshad Mane",
  creativeIdentity: "shiv.premi_1630",
  email: "hrmane94@gmail.com",
  ownerEmail: "hrmane94@gmail.com",
  motto: "Pressure is a privilege.",
  philosophy: [
    "Build a life worth experiencing.",
    "Keep learning without limits.",
    "Leave people better than you found them."
  ],
  location: "Sangli / Thane, Maharashtra, India",
  institution: "Annasaheb Dange College of Engineering and Technology (ADCET), Ashta",
  profiles: {
    github: "https://github.com/hrmane94-source",
    linkedin: "https://www.linkedin.com/in/shivpremi1630/?isSelfProfile=true",
    instagram: "https://www.instagram.com/shiv.premi_1630?cplk=Y3lhemlkZXM2MWhr",
    behance: "https://www.behance.net/harshadmane11",
  },
  labels: {
    github: "github.com/hrmane94-source",
    linkedin: "linkedin.com/in/shivpremi1630",
    instagram: "@shiv.premi_1630",
    behance: "behance.net/harshadmane11",
  }
};
