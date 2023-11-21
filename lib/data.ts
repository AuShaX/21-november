import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { RiSparkling2Line } from "react-icons/ri";
import { BsArrowThroughHeart, BsSuitHeart  } from "react-icons/bs";
import { PiAirplaneTakeoffLight, 
  PiAirplaneTakeoffFill, 
  PiGraduationCapDuotone,
  PiGraduationCapLight,
  PiPersonSimpleRun  } from "react-icons/pi";
import { LiaUniversitySolid } from "react-icons/lia";
import { FaUniversity } from "react-icons/fa";
import { GiBigDiamondRing, GiStrong, GiPathDistance } from "react-icons/gi";
import { RiPinDistanceLine } from "react-icons/ri";
import { TiArrowSync } from "react-icons/ti";
import { GrAchievement } from "react-icons/gr";
import { LuHeartHandshake } from "react-icons/lu";
import { PiHeartHalfDuotone, PiHeartbeat  } from "react-icons/pi";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Highlights",
    hash: "#highlights",
  },
  {
    name: "Reasons",
    hash: "#reasons",
  },
  {
    name: "Timeline",
    hash: "#timeline",
  },
  // {
  //   name: "Contact",
  //   hash: "#contact",
  // },
] as const;

export const timelineData = [
  {
    title: "The Beginning of our Story",
    location: "14 Dec 2014",
    description:
      "First day we met. A chance encounter that sparked something extraordinary! 🌟 The day I truly experienced Love at first sight — our hearts defenitely knew, even before we did! 💖",
    icon: React.createElement(RiSparkling2Line),
    date: "Dec 2014",
  },
  {
    title: "Sealed with Love: Our Official Beginning",
    location: "21 Feb 2015 💞",
    description:
      "The day I asked her to be my Girlfriend — A single question, a thousand emotions, and the sweet beginning of 'Us'.",
    icon: React.createElement(BsSuitHeart),
    date: "Feb 2015",
  },
  {
    title: "Long Distance Begins",
    location: "KL, Malaysia",
    description:
      "Just 3-4 months into our relationship, I moved to Malaysia for studies, marking the beginning of our long-distance adventure. Over 3 years, despite the challanges, we never ceased to give our best every day. The distance taught us something extraordinary, instilling a profound appreciation for each other in ways we never imagined. 💌✈️",
    icon: React.createElement(PiAirplaneTakeoffLight),
    date: "June 2015 - 2018",
  },
  {
    title: "Into the 4th Year (Long Distance)",
    location: "",
    description:
      "Supposed to be the year for my return, but plans shifted as I chose to pursue a master's degree, extending our time apart. Despite the distance, our love stayed strong and unwavering, Alhamdhu'lillah!💞🤲",
    icon: React.createElement(LiaUniversitySolid),
    date: "Oct 2018 - Oct 2019",
  },
  {
    title: "Graduation / Return to Home",
    location: "Until I see you again, Malaysia",
    description:
      "Done with studies for good and returned back home. Finally the end of our long distance relationship. Atleast we thought so... lol",
    icon: React.createElement(PiGraduationCapLight),
    date: "Dec 2019",
  },
  {
    title: "Getting used to 'No-Distance' Relationship 😂 ",
    location: "Male', Maldives",
    description:
      "On top of dealing with covid and many other uncertainities in life, it was one the most challanging years of our lives. Life got us hard, but being there for each other helped us build and strenghthen our releationship even stronger than ever. We are where we are today, because of 2020! 😇",
    icon: React.createElement(PiHeartbeat),
    date: "2020",
  },
  {
    title: "Persuing Her Dreams!",
    location: "Male', Maldives",
    description:
      "In the midst of Covid lockdowns, we spotted an opportunity for her to study online from universities abroad. It was a dream she'd held onto for a long time. With the small savings she'd gathered — just enough for the initial semester — we took the leap, together as a team. I made her a promise to always have her back, no matter what! Miraculously, we managed for the next 2 years, before considering the government student loan. Alhamdhu'lillah! 🤲",
    icon: React.createElement(LiaUniversitySolid),
    date: "Nov 2020",
  },
  {
    title: "Got Married!",
    location: "21 Feb 2021 — Happiest day of our lives!",
    description:
      "The day we became ONE in the sacred bond of marriage. The beginning of a new chapter, and our love remains timeless. 💍👰🤵 The day also marked the 6th year milestone in this journey together 💖",
    icon: React.createElement(GiBigDiamondRing),
    date: "Feb 2021",
  },
  // {
  //   title: "Struggling Continues..",
  //   location: "Male', Maldives",
  //   description:
  //     "Since self funded,",
  //   icon: React.createElement(PiPersonSimpleRun),
  //   date: "2021 - Oct 2022",
  // },
  {
    title: "Final Year: Back to In-Person Classes",
    location: "KL, Malaysia",
    description:
      "Her final year of studies required a move to Malaysia. Back to the long-distance 😮‍💨, and with her leaving work, we could no longer manage the finances and decided to get government student loans to keep the journey going! 😄",
    icon: React.createElement(PiAirplaneTakeoffLight),
    date: "Oct 2022",
  },
  {
    title: "Degree Unlocked",
    location: "KL, Maldives",
    description:
      "Just aced those final exams and her final year project! Seeing her conquer one of her biggest dreams — speechless with pride and overflowing with happiness for her. 🎓🌟",
    icon: React.createElement(PiGraduationCapLight),
    date: "Nov 2023",
  },
  
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const reasonsData = [
  "Kindness 😇",
  "Respect ❤️",
  "Loyalty 🤝",
  "Compassion 💖",
  "Understanding 🤝",
  "Patience ⌛",
  "Trust 🤝",
  "Caring 🤗",
  "Charming ✨",
  "Affection 💗",
  "Laughter 😄",
  "Passion🔥",
  "Support 🤲",
  "Strength 💪",
  "Joy 😃",
  // "Warmth ☀️",
  "Inspiration 🌟",
  "Adoration 😍",
  "Friendship👫",
  "Comfort 🤗",
  "Gentleness 🌸",
  "Connection 💞",
  "Spark 🌠",
  "Glow ✨"

] as const;
