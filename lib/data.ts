import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Proffesional Cover.png";
import rmtdevImg from "@/public/Cubex-Website Builder Cover.png";
import wordanalyticsImg from "@/public/Restraunant Cover.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Front-End Developer",
    location: "Gilgit,Danyore",
    description:
      "I worked as a front-end developer for 1.5 years.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Froent-end Developer",
    location: "Pakistan,Gilgit Danyore",
    description:
      "I'm now a front-end developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind,React Bootstrap. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio website",
    description:
      "I work as a frontend developer to make this website by using react with node.js and also using tailwind css.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Cubex Website ",
    description:
      "I hava found a job  of Cubex Website.I work as a frontend developer and I really enjoy to make this ",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDb"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Restaurent Website ",
    description:
      "A restaurent web app for quick order food on text. It shows many type of internationals dishes ,and local food with discount and first order payment is half.",
    tags: ["React", "Next.js", "prisma", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",

  "Remotion",
  "Framer Motion",
] as const;
