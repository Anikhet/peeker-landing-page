"use client";

import Image from 'next/image';
import { TestimonialCarousel, Testimonial } from '../ui/testimonial-carousel';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonialData: Testimonial[] = [
  {
    id: '1',
    name: 'Lance Goldman',
    title: 'Co - Founder - Opp.Agency',
    videoThumbnail: '/lance.svg',
    videoUrl: "https://www.youtube.com/embed/qloFLq3A_3s", // Replace with actual video IDs
    quote: 'Really Easy Deliverability Tracking'
  },
  {
    id: '2',
    name: 'Clark Gonek',
    title: 'Head of Growth @ Boardy.ai',
    videoThumbnail: '/human1.svg',
    videoUrl: 'https://www.youtube.com/embed/U_L9J5yOK_g',
    quote: 'Love the automatic inbox replacement'
  },
  {
    id: '3',
    name: 'Jeremy Conre',
    title: 'Co- Founder @ EverOutbound.io',
    videoThumbnail: '/jeremy.svg',
    videoUrl: "https://www.youtube.com/embed/GRi1fOMLc1I",
    quote: 'Order is 10x easier than other providers'
  },
  {
    id: '4',
    name: 'Ryan Kaufman',
    title: 'Co- Founder @ 1Price.co',
    videoThumbnail: '/ryan.png',
    videoUrl: 'https://www.youtube.com/embed/VCr-Rt0osSE',
    quote: 'Customer Support is unmatched'
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-12 lg:py-20 space-y-12 lg:space-y-20 px-4 lg:px-0">
      {/* Header */}
      <motion.div 
        className="text-center lg:text-left w-full lg:w[1100px] px-4 lg:px-55"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <Image 
            src="/Testimonial Section/Eye-brow Text.svg" 
            alt="Problem Badge" 
            width={100} 
            height={100} 
            className="h-[40px] w-[70px] sm:h-[50px] sm:w-[85px] lg:h-[60px] lg:w-[100px] mx-auto lg:mx-0" 
          />
        </motion.div>
        <motion.h2 
          className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-white tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-tight leading-tight mb-2 lg:mb-0"
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          Why Cold Emailers
        </motion.h2>
        <motion.div 
          className="testimonials-title-gradient testimonials-title-container" 
          style={{
            fontSize: 'clamp(24px, 6vw, 44px)',
            lineHeight: '1.2',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '500',
            letterSpacing: '-0.05em'
          }}
          initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 40, filter: "blur(15px)" }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <p className="leading-[1.2] lg:leading-[normal]">Love Self Healing Inboxes</p>
        </motion.div>
        <motion.p 
          className="text-[#bcbcbc] text-[14px] sm:text-[15px] lg:text-base tracking-tight leading-[1.4] lg:leading-tight max-w-[350px] sm:max-w-[450px] lg:max-w-none mx-auto lg:mx-0"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(12px)" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          Peeker gives cold emailers what others don&apos;t: real <br className="hidden sm:block"/> tracking, clean setup, and inboxes that actually land.
        </motion.p>
      </motion.div>

      {/* Testimonial Carousel */}
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <TestimonialCarousel testimonials={testimonialData} />
      </motion.div>
    </section>
  );
}
