"use client";

import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs'; // React Icons se arrow down icon import kar rahe hain
import Link from 'next/link'; // Next.js ka Link component import kar rahe hain

// Services ki list, har service ka details object mein hai
const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Hum modern, responsive, aur scalable websites banate hain jo latest technologies ka use karti hain.',
    href: '#',
    icon: '🌐', // Web Development ke liye icon
    duration: '6 weeks', // Web development ki duration
  },
  {
    num: '02',
    title: 'App Development',
    description: 'Hum mobile apps banate hain jo iOS aur Android platforms ke liye hain, seamless user experience ke saath.',
    href: '#',
    icon: '📱', // App Development ke liye icon
    duration: '8 weeks', // App development ki duration
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'Humare design team beautiful aur user-friendly interfaces banati hai jo user experience ko enhance karte hain.',
    href: '#',
    icon: '🎨', // UI/UX Design ke liye icon
    duration: '4 weeks', // UI/UX design ki duration
  },
  {
    num: '04',
    title: 'Digital Marketing',
    description: 'Hum digital marketing services provide karte hain jo aapke business ko online grow karne mein madad karte hain, jaise SEO, PPC, aur social media marketing.',
    href: '#',
    icon: '📈', // Digital Marketing ke liye icon
    duration: '5 weeks', // Digital marketing ki duration
  },
  {
    num: '05',
    title: 'SEO Optimization',
    description: 'Hum aapki website ko search engines ke liye optimize karte hain taaki aapka business search results mein top par aaye.',
    href: '#',
    icon: '🔍', // SEO Optimization ke liye icon
    duration: '3 weeks', // SEO ki duration
  }
];

// Services component jo services ko display karega
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        {/* Grid layout jo responsive hai, 1 column mobile pe, 2 columns medium screens pe aur 3 columns large screens pe */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[60px]">
          {/* Yahan services array ko map karke har service ke liye ek card display karenge */}
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              {/* Service ke top section mein service number aur icon */}
              <div className="w-full flex justify-between items-center">
                {/* Service ka number, jisme number large size mein dikhega */}
                <div className="text-5xl font-extrabold text-white group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>

                {/* Link jo service details page pe redirect karega */}
                {/* BsArrowDownRight icon ke saath */}
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
        group-hover:bg-accent transition-all duration-500
        flex justify-center items-center hover:-rotate-45 group-hover:translate-x-3 group-hover:translate-y-3">
                  <BsArrowDownRight className='text-primary text-3xl' /> {/* Link ke andar icon */}
                </Link>
              </div>

              {/* Service ka title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* Service ka icon */}
              {/* Service ke icon ko yahan display kar rahe hain */}
              <div className="text-3xl">{service.icon}</div>

              {/* Service ki description */}
              {/* Service ka description text ke form mein */}
              <p className="text-white/60">{service.description}</p>

              {/* Service ki estimated duration */}
              <p className="mt-2 text-sm text-gray-500">Estimated Duration: {service.duration}</p>

              {/* Border ke liye bottom line */}
              <div className="border-b border-white/20 w-full mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
