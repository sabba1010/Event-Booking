


import React from 'react';
import maxresdefault from '../assets/maxresdefault.jpg';
import img117 from '../assets/117.jpg';
import darlaPntm from '../assets/Darla_PNTM.jpg';
import mocaf from '../assets/modern-and-contemporary-art-festival-2024-mocaf-1719681509.jpg';

const slides = [
  { id: 1, title: "National Art Carnival", image: maxresdefault, description: "Celebrate the vibrant world of art and creativity with masterpieces from local and international artists." },
  { id: 2, title: "AI & Robotics Expo", image: img117, description: "Explore the cutting-edge innovations in AI and robotics that are shaping the future of technology." },
  { id: 3, title: "Future Tech Meetup", image: darlaPntm, description: "Join the brightest minds in tech to discuss innovations that will transform our future." },
  { id: 4, title: "Modern Art Fiesta", image: mocaf, description: "Experience a fusion of contemporary and modern art that challenges conventions and ignites imagination." },
];

const Banner = () => {
  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary">🌟 Our Featured Events</h1>

      <div className="carousel w-full h-[500px] rounded-xl shadow-2xl">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full"
          >
            <img
              src={slide.image}
              className="w-full object-cover rounded-xl"
              alt={slide.title}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent rounded-xl"></div>

            {/* Text overlay */}
            <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-white space-y-4 max-w-md z-10 animate-fadeIn">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-base">
                {slide.description}
              </p>
              <button className="btn btn-primary btn-sm mt-2">Explore Event</button>
            </div>

            {/* Navigation buttons */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
              <a href={`#slide${(index - 1 + slides.length) % slides.length + 1}`} className="btn btn-circle btn-sm">
                ❮
              </a>
              <a href={`#slide${(index + 1) % slides.length + 1}`} className="btn btn-circle btn-sm">
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
