import React from 'react';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Social from '@/components/Social';
import Photo from '@/components/Photo';

const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full"> 
        <div className="flex flex-col xl:flex-row item-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className='h1 mb-6' >Hello, My name is <br /> <span className="text-accent">KRITESH MOYAL</span></h1>

            {/* paragraph about myself */}
            <p className='max-w-[500px] mb-9 textwhite'>
              I’m a Full-Stack Developer focused on delivering impactful solutions. My experience includes MERN stack projects and deep learning models that I developed to continuously upgrade my skills. I’m excited to bring this expertise in creating scalable, data-driven applications.
            </p>

            {/* button and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              
              {/* Social component */}
              <div className="mb-8 xl:mb-0">
              <Social
  containerStyles="flex gap-6"
  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
/>

              </div>
            </div>
          </div>

          {/* photo */}
          <div>
            <Photo />
            </div>
        </div> 
      </div>
    </section>
  );
};

export default Home;

// import React from 'react'
// import { Button } from '@/components/ui/button';
// import {FiDownload} from "react-icons/fi";

// import Social from '@/components/social/Social';

// const Home = () => {
//   return (
//     <section className='h-full'>
//    {/* isse sab mera name k line m aane lag jayga right side corner */}
//     <div className="container mx-auto h-full"> 
//       <div className="flex flex-col xl:flex-row item-center justify-between xl:pt-8 xl:pb-24">
//         {/* text */}
//         <div className="text-center xl:text-left">
//   <span className="text-xl">Software Developer</span>
//   <h1 className='h1 mb-6' >Hello, My name is <br /> <span className="text-accent">KRITESH MOYAL</span></h1>
  
//   {/* paragraph about myself */}
//   <p className=' max-w-[500px] mb-9 textwhite'> I’m a Full-Stack Developer focused on delivering impactful solutions. My experience includes MERN stack projects and deep learning models that I developed to continuously upgrade my skills. I’m excited to bring this expertise in creating scalable, data-driven applications.</p>

//   {/* button  and socials */}
//   {/* how to adjust rounded If you want to adjust the button’s border radius 

// rounded-sm – small rounding
// rounded-md – medium rounding
// rounded-lg – large rounding (your current setting)
// rounded-xl – extra-large rounding
// rounded-2xl – very rounded
// rounded-full – */}

  

//     < div className='flex flex-colxl:flex-row item-center gap-8'>
//               <Button variant='outline' size='lg'  className='uppercase flex items-center gap-2'>
//               <span>Download CV</span>
//                 <FiDownload className="text-xl" />
                
//               </Button>
//               {/* connect with socials.jsx   components -> social`*/}
//            <div className="mb-8 xl:mb-0">
//   <Social />
// </div>

//             </div>
//           </div>

  

//         {/* photo */}
//         <div>photo</div>
//       </div> 

//     </div>
//     </section>
//   );
// };

// export default Home;
