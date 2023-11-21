"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import Highlight from "./highlight";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';


// import required modules
import { Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function Projects() {
  const { ref } = useSectionInView("Highlights", 0.5);

  return (
    <section ref={ref} id="highlights" className="scroll-mt-28 mb-28">
      <SectionHeading>Highlights & Memories</SectionHeading>
      <h1 className="text-center -mt-6 mb-10 text-2xl">✨✈️🌍💘</h1>
      <div>

      </div>
      <div>
        <motion.div
          className="group mb-3 sm:mb-8 last:mb-0"
        >
          {/* <div className="bg-gray-100 max-w-[30rem] border border-black/5 rounded-lg overflow-hidden relative sm:h-[80rem] dark:text-white dark:bg-white/10"> */}
          <div className="container max-w-[50rem] sm:h-[800px] bg-gray-100 border border-black/5 rounded-lg overflow-hidden relative dark:text-white dark:bg-white/10">
            <Swiper
              slidesPerView={1.4}
              spaceBetween={5}
              // effect={'fade'}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation, EffectFade]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src="/images/1.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-18 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Love at First Sight! 🥰</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>14th Dec 2014 (The Day We Met)</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/12.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>A Promise Sealed!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-99" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Tying the Knot and Hearts. 💍💖</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/6.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Malaysia</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>French Village</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/2.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute -top-20 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-99" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Paradise Moments!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-99" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>#GetawayBliss</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/3.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute -top-20 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>The Town Of Marmaris</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Turkey's very own Santorini</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/4.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Singapore!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Nothing much here..</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/5.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Fethiye, Turkey</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>#FethiyeAdventures</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/7.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Cappadocia, Turkey</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Wandering through the enchanting landscapes of Cappadocia</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/8.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Weekend Getaways!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Missed much..</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/9.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Farewells</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Until we meet again!</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/10.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Langkawi, Malaysia!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>#IslandGetaway</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <Image src="/images/11.jpg" alt="Slide 1" width={400} height={400} />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-end justify-center h-full px-4">
                  <p className="text-white text-xl font-bold px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Love at First Sight!</p>
                  <p className="text-white text-sm text-italic px-4 opacity-90" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>14th Dec 2014</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
