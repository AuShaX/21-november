"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";


export default function Contact() {
  // const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      // ref={ref}
      className="mb-20 sm:mb-10 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >

      <h1 className="text-2xl font-bold text-center text-indigo-700 mb-6 dark:text-indigo-500">
        Wishing You Boundless Success and Joy in Your Future Endeavors! 💖
      </h1>
      <p className="mb-5 text-col text-sm text-gray-500">Fantastic Profile BTW! 🤩</p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://mv.linkedin.com/in/mariyam-ahmed-shareef-a27853248"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </motion.div>


    </motion.section>
  );
}
