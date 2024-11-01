import React from 'react';
import { motion } from 'framer-motion';

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Reverse index calculate karne ka function
const reverseIndex = (index) => {
  const totalSteps = 6; // Total steps 6 hain
  return totalSteps - index - 1; // Reverse index nikaal raha hai
};

const Stairs = () => {
  return (
    <>
      {[...Array(6)].map((_, index) => ( // 6 steps generate kar raha hai
        <motion.div 
          key={index} 
          variants={stairAnimation} 
          initial="initial" 
          animate="animate" 
          exit="exit" 
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1, // Staggered delay calculate kar raha hai
          }}
          className="h-full w-full bg-white relative" // Styling apply kar rahe hain
          // style={{
          //   position: "absolute", // Yeh zaroori hai taaki steps sahi position mein ho
          //   top: `${index * (100 / 6)}%`, // Steps ko vertically stack karne ke liye
          // }}
        />
      ))}
    </>
  );
};

export default Stairs; // Default export use kar rahe hain
