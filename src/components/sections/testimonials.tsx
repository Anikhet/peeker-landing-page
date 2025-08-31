import Image from 'next/image';
import { TestimonialCarousel, Testimonial } from '../ui/testimonial-carousel';

const testimonialData: Testimonial[] = [
  {
    id: '1',
    name: 'Lance Goldman',
    title: 'Co - Founder - Opp.Agency',
    videoThumbnail: '/badge1.svg', // Using placeholder images for now
    quote: 'Really Easy Deliverability Tracking'
  },
  {
    id: '2',
    name: 'Clark Gonek',
    title: 'Head of Growth @ Boardy.ai',
    videoThumbnail: '/badge2.svg',
    quote: 'Love the automatic inbox replacement'
  },
  {
    id: '3',
    name: 'Jeremy Conre',
    title: 'Co- Founder @ EverOutbound.io',
    videoThumbnail: '/badge3.svg',
    quote: 'Order is 10x easier than other providers'
  },
  {
    id: '4',
    name: 'Jeremy Conre',
    title: 'Co- Founder @ ABCXYZ',
    videoThumbnail: '/badge1.svg',
    quote: 'Customer Support is unmatched'
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-20 space-y-20">
      {/* Eyebrow Text */}
    
       
     
    


      {/* Header */}
      <div className="text-left w-1/2 px-44">
      <Image 
              src="/Testimonial Section/Eye-brow Text.svg" 
              alt="Problem Badge" 
              width={100} 
              height={100} 
              className="h-[60px] w-[100px]" 
            />
        <h2 className="text-4xl font-medium text-white tracking-tight">
          Why Cold Emailers
        </h2>
        <div className="testimonials-title-gradient testimonials-title-container">
          <p>Love Self Healing Inboxes</p>
        </div>
        <p className="text-[#bcbcbc] text-base tracking-tight">
          Peeker gives cold emailers what others don&apos;t: real <br/> tracking, clean setup, and inboxes that actually land.
        </p>
      </div>

      {/* Testimonial Carousel */}
      <div className="max-w-7xl mx-auto">
        <TestimonialCarousel testimonials={testimonialData} />
      </div>
    </section>
  );
}
