'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  videoThumbnail: string;
  videoUrl?: string; // Optional video URL for embedding
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<{ [key: string]: boolean }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 456; // Width of each testimonial card
      const scrollPosition = index * cardWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    setCurrentIndex(index);
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToIndex(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(testimonials.length - 1, currentIndex + 1);
    scrollToIndex(newIndex);
  };

  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < testimonials.length - 1;

  const handleVideoPlay = (testimonialId: string) => {
    setPlayingVideos(prev => ({
      ...prev,
      [testimonialId]: true
    }));
  };

  return (
    <div className="relative w-full">
      {/* Navigation Arrows */}
      <div className="absolute -top-20 right-0 flex gap-3 z-10">
        <button
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          className={`w-[42.5px] h-[42.5px] rounded-lg flex items-center justify-center transition-all ${
            canScrollLeft 
              ? 'bg-white/10 hover:bg-white/20 cursor-pointer' 
              : 'bg-white/5 cursor-not-allowed opacity-50'
          }`}
        >
          <span className="text-white text-xl font-semibold rotate-180">→</span>
        </button>
        <button
          onClick={scrollRight}
          disabled={!canScrollRight}
          className={`w-[42.5px] h-[42.5px] rounded-lg flex items-center justify-center transition-all ${
            canScrollRight 
              ? 'bg-white/10 hover:bg-white/20 cursor-pointer' 
              : 'bg-white/5 cursor-not-allowed opacity-50'
          }`}
        >
          <span className="text-white text-xl font-semibold">→</span>
        </button>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex-none w-[456px] snap-start"
          >
            {/* Testimonial Card */}
            <div className="relative h-[464px] rounded-[20px] border border-dashed border-[#373737] overflow-hidden">
              {testimonial.videoUrl && playingVideos[testimonial.id] ? (
                /* Embedded Video - Show when playing */
                <iframe
                  src={testimonial.videoUrl}
                  title={`${testimonial.name} testimonial`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                /* Thumbnail with Play Button - Show initially */
                <>
                  {/* Blurred Background */}
                  <div className="absolute inset-0">
                    <div 
                      className="absolute inset-0 blur-[20px] opacity-60"
                      style={{
                        backgroundImage: `url(${testimonial.videoThumbnail})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>

                  {/* Centered Thumbnail Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[300px] h-[464px] rounded-lg overflow-hidden">
                      <Image
                        src={testimonial.videoThumbnail}
                        alt={`${testimonial.name} thumbnail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Play Button Overlay - Clickable when video available */}
                  {testimonial.videoUrl && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                      onClick={() => handleVideoPlay(testimonial.id)}
                    >
                      <div className="w-[78px] h-[78px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                        <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Name and Title */}
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-xl font-semibold tracking-tight mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-white/50 tracking-tight">
                  {testimonial.title}
                </p>
              </div>
            </div>

            {/* Quote Bubble */}
            <div className="mt-6 backdrop-blur-[1.35px] bg-white/5 rounded-2xl border border-dashed border-[#373737] p-4">
              <p className="text-[#efefef] text-base italic tracking-tight text-center">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

