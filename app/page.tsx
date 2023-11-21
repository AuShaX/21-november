import About from "@/components/about";
import Contact from "@/components/contact";
import Timeline from "@/components/timeline";
import Intro from "@/components/intro";
import Highlights from "@/components/highlights";
import SectionDivider from "@/components/section-divider";
import Reasons from "@/components/reasons";
import { motion } from "framer-motion";
import Countdown from "@/components/countdown";



export default function Home() {
  // const targetDate = '2024-01-01T00:00:00'; // Set your target date here

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Highlights />
      <Reasons />
      <Timeline />
      <Contact />
    </main>
  );
}
