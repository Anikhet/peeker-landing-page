import Image from 'next/image';
import { TestimonialCarousel, Testimonial } from '../ui/testimonial-carousel';

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
  return (
    <section className="relative py-12 lg:py-20 space-y-12 lg:space-y-20 px-4 lg:px-0">
      {/* Eyebrow Text */}
    
       
     
    


      {/* Header */}
      <div className="text-center lg:text-left w-full lg:w[1100px] px-4 lg:px-55">
      <Image 
              src="/Testimonial Section/Eye-brow Text.svg" 
              alt="Problem Badge" 
              width={100} 
              height={100} 
              className="h-[40px] w-[70px] sm:h-[50px] sm:w-[85px] lg:h-[60px] lg:w-[100px] mx-auto lg:mx-0" 
            />
        <h2 className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-medium text-white tracking-[-1px] sm:tracking-[-1.5px] md:tracking-[-2px] lg:tracking-tight leading-tight mb-2 lg:mb-0">
          Why Cold Emailers
        </h2>
        <div className="testimonials-title-gradient testimonials-title-container" style={{
          fontSize: 'clamp(24px, 6vw, 44px)',
          lineHeight: '1.2',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '500',
          letterSpacing: '-0.05em'
        }}>
          <p className="leading-[1.2] lg:leading-[normal]">Love Self Healing Inboxes</p>
        </div>
        <p className="text-[#bcbcbc] text-[14px] sm:text-[15px] lg:text-base tracking-tight leading-[1.4] lg:leading-tight max-w-[350px] sm:max-w-[450px] lg:max-w-none mx-auto lg:mx-0">
          Peeker gives cold emailers what others don&apos;t: real <br className="hidden sm:block"/> tracking, clean setup, and inboxes that actually land.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-7xl mx-auto">
        <TestimonialCarousel testimonials={testimonialData} />
      </div>
    </section>
  );
}
