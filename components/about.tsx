"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
   
      <p className="mb-3">
      I&apos;m a passionate web developer who specializes in bringing creative ideas to life using the power of technology. With expertise in React, Node.js, and Next.js, I craft seamless websites that not only look great but also function flawlessly across all devices. I'm well-versed in TypeScript and JavaScript, utilizing their capabilities to create dynamic and interactive experiences. My proficiency extends to using tools like Tailwind CSS, Framer Motion, and Remotion to enhance user interfaces.I ensure that data-driven applications are as robust as they are visually appealing. Let&apos;s collaborate to turn your digital aspirations into reality{" "}
      </p>

      <p>
        <span className="italic">When I&apos;
        m not coding</span>, I enjoy 
         watching tutorials, and reasearch about new development things. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        AI&apos;s and Api&apos;s 
      </p>
    </motion.section>
  );
}
