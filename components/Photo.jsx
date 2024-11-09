"use client"; // Make sure this is at the top for client-side rendering

import { motion } from "framer-motion";
import { Repeat } from "lucide-react";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* First motion.div with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2, // delay for 2 seconds before starting animation
          duration: 0.4, // duration of animation
          ease: "easeIn",
        }}
       
      >

        {/* First image */}
        {/* Second motion.div with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.4, // slightly later delay for second animation
            duration: 0.4, // duration of animation
            ease: "easeInOut",
          }}
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"

        >
       
       

<Image
  src="/assets/photo.png" // Correct path to the image in the public folder
  alt="Profile Picture"
  priority
  quality={100}
  fill
  className="object-contain"
/>


   {/* <Image
  src="/assets/photo.png" 
  alt="Profile Picture"
  priority
  quality={100}
  fill
  className="object-contain"
/> */}

        </motion.div>
        {/* circle */}
        <motion.svg
    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
    fill="transparent"
    viewBox="0 0 506 506"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle 
      cx="253"
      cy="253"
      r="250" // Use "r" for radius
      stroke="#00ff99"
      strokeWidth="4"
      strokeL
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{
        pathLength: 0,
        strokeDasharray: "24 10 0 0",
        rotate: 0,
      }}
      animate={{
        pathLength: 1,
        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
        rotate: [120, 360],
      }}
      transition={{
        duration: 20,
        Repeat : Infinity,
        repeatType: "reverse",
      }}
    />
  </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
