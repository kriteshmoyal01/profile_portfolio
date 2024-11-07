"use client"; // Make sure this is at the top for client-side rendering

import { motion } from "framer-motion";
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
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
      >
        {/* Second motion.div with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 2.4, // slightly later delay for second animation
            duration: 0.4, // duration of animation
            ease: "easeInOut",
          }}
        >
          <Image
            src="/assets/photo.png" // Correct image path
            priority
            quality={100}
            fill
            alt="Profile Picture"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
