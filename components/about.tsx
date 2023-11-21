"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Home");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Us</SectionHeading>
      <p className="-mt-6 mb-5 text-col text-sm text-gray-500">( more about myself 😁 )</p>
      <p className="mb-4">
        Alright, knowing how much she's probably going to hate me for doing this publicly,
        as much as I want to make this all about her,
        I just wanted to use this wonderful opportunity to showcase my work as well.. lol.
        Honestly, building a website has been a longtime dream, but I've often found myself stuck in what they call 'Tutorial Hell'.
      </p>
      <p className="mb-4">
        When it comes to actually creating something, 
        I find myself completely blank and lost, 
        not having any ideas about where to start. 
        Coding has always fascinated me 🤩 (atleast the thought of it, haha). I could spend hours just watching some random tutorial on YouTube, like most would do on Netflix or playing games, lol.
      </p>
      <p className="mb-4">
      Recently, I stumbled upon a YouTube video discussing how long it ACTUALLY takes to learn how to code. 
      It hit me that the journey largely depends on having a clear OBJECTIVE and valuing your time. That realization completely shifted my perspective!
      
        {/* <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer. */}
      </p>
      <p>
        <span className="font-medium">And most importantly I realized, there's no clearer objective in my life than HER — my precious, wonderful wife! 💖 (Too Cheesy?, I know 😂)</span>
      </p>
      <p className="-mb-20 mt-5">. . .</p>
    </motion.section>
  );
}
