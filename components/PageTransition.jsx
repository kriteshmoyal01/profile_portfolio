"use client"; // Tells Next.js that this component is client-side only

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'; // Importing animation functions from framer-motion
import { usePathname } from 'next/navigation'; // Hook to get the current pathname in Next.js

const PageTransition = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname so that the animation can change when the route changes

  return (
    <AnimatePresence> {/* Wraps the content to handle animations on route change */}
      <div key={pathname}> {/* Re-renders the div when the pathname changes */}
      
        <motion.div
          // Initial state of the overlay (visible at full opacity)
          initial={{ opacity: 1 }}
          
          // Animation settings for when the component is shown (fading out to 0 opacity)
          animate={{
            opacity: 0, // Fades out the overlay
            transition: { 
              delay: 1, // Waits 1 second before starting the fade-out
              duration: 0.4, // Lasts 0.4 seconds
              ease: "easeInOut" // Smooths the transition in and out
            }
          }}

          // CSS classes for styling the overlay
          className="h-screen w-screen fixed top-0 pointer-events-none"
          // "h-screen" and "w-screen" make the overlay cover the entire viewport
          // "fixed top-0" positions the overlay at the top, covering the viewport
          // "pointer-events-none" makes the overlay ignore mouse events (clicks pass through to underlying content)
        />
        
        {children} {/* Renders the page content */}
        
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
