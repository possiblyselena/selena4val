'use client';

import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/slideshow/daydream.JPG',
    alt: 'Game Jam',
    caption: 'Ran a 24h Game Jam in Hamilton - Sept 2025',
  },
  {
    image: '/slideshow/flagship.JPG',
    alt: 'Hackathon win',
    caption: 'Went to Austin, TX to Win a Hackathon! - March 2025',
  },
  {
    image: '/slideshow/fll.jpg',
    alt: 'FIRST Lego League',
    caption: "Organized HWDSB's FIRST Lego League Tournament x2 - 2024/2025",
  },
  {
    image: '/slideshow/hammerhacks.jpg',
    alt: 'Hackathon',
    caption: "Organized Hamilton's Biggest Hackathon - 2024",
  },
  {
    image: '/slideshow/impactaward.JPG',
    alt: 'Impact Award',
    caption: 'Won the Impact Award at Niagara College - 2026',
  },
  {
    image: '/slideshow/scrapyard.jpg',
    alt: 'Scrapyard',
    caption: "Ran Hamilton's First 24h High School Hackathon - March 2025",
  },
  {
    image: '/slideshow/shad.jpg',
    alt: 'UBC Vancouver',
    caption: 'Stayed at UBC Vancouver for a month to do STEM stuff - July 2024',
  },
  {
    image: '/slideshow/Stemleypit.jpg',
    alt: 'Drive Team',
    caption: 'Competed in an all-girls drive team and won! - Nov 2024',
  },
  {
    image: '/slideshow/underground.JPG',
    alt: 'Cohere AI',
    caption: 'Organized an all-girls coding event at Cohere AI - May 2025',
  },
  {
    image: '/slideshow/wistemdinner.jpg',
    alt: 'Mayor Dinner',
    caption: 'Also Organized a WiSTEM dinner with those in the industry - May 2025',
  },
];

export default function Community({ setPageNumber }: { setPageNumber: (page: number) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  function changeSlide(delta: number) {
    setActiveIndex((current) => {
      const next = current + delta;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  }

  return (
    <div className="w-full min-h-screen bg-white-100 flex flex-col items-center justify-start p-4 md:p-8 gap-4 md:gap-8">
      <div className="w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">My Community Involvement</h1>
        <hr className="border-dashed border-4 m-4 border-gray-300" />
        <p className="text-sm md:text-base">
          My extracurriculars were based on STEM education and how much I lacked of it throughout my childhood is what motivated me to get involved. Not to brag, but I've done too much stuff to write on this tiny website, so please look at the slideshow below to see the stuff I did in high school!
        </p>
      </div>

      <div className="w-full h-48 md:h-160 relative overflow-hidden rounded-xl shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`${index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-0 transition-opacity duration-500`}
          >
            <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-sm md:text-base">
              {slide.caption}
            </div>
          </div>
        ))}

        <button
          type="button"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-60 text-white flex items-center justify-center rounded-full z-10"
          onClick={() => changeSlide(-1)}
        >
          &#10094;
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black bg-opacity-60 text-white flex items-center justify-center rounded-full z-10"
          onClick={() => changeSlide(1)}
        >
          &#10095;
        </button>
      </div>

      <div className="flex flex-wrap gap-3 justify-center text-white">
        <button className="bg-black text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(1)}>
          Intro
        </button>
        <button className="bg-border text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(2)}>
          Community
        </button>
        <button className="bg-highlight text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(3)}>
          Valedictorian
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:scale-110" onClick={() => setPageNumber(4)}>
          Vote!
        </button>
      </div>
    </div>
  );
}