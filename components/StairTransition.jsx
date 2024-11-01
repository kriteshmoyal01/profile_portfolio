"use client"; // Is directive ko sabse upar rakho taaki ye client-side par render ho
import Stairs from './Stairs'; // Ensure the path and import are correct
import { AnimatePresence } from 'framer-motion'; // AnimatePresence import kara transition ke liye
import { usePathname } from 'next/navigation'; // usePathname hook import kara, jo current route dega
import React from 'react';

const StairTransition = () => {
  const pathname = usePathname(); // current route ko track karne ke liye

  return (
    <>
      <AnimatePresence mode="wait"> {/* Route change hone par animation handle karega */}
        <div key={pathname}> {/* Route change par re-render hoga aur transition trigger karega */}
          <div
            className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex "
          >
            {/* Ye main overlay div hai jo "stair" effect ke liye */}
            <Stairs />
            {/* Transition overlay ke andar dikhne wala content */}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
