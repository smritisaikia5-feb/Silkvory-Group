import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: 'Elevate Your Brand',
    subtitle: 'Strategic Marketing Solutions',
    description: 'Transform your vision into reality with our comprehensive digital marketing services',
    image: '/hero-1.jpg',
  },
  {
    title: 'Creative Excellence',
    subtitle: 'Design That Inspires',
    description: 'Captivating content and innovative design solutions for the modern brand',
    image: '/hero-2.jpg',
  },
  {
    title: 'Results Driven',
    subtitle: 'Performance Marketing',
    description: 'Data-driven strategies that deliver measurable results and ROI',
    image: '/hero-3.jpg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {/* Background Container with Fallback Color */}
          <div className="absolute inset-0 bg-gray-900 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover transition-transform duration-[10000ms] ${index === currentSlide ? 'animate-ken-burns' : ''
                }`}
            />
            {/* Dark Overlay for Readability */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {slide.title}
              </h2>
              <p className="text-2xl md:text-3xl mb-6 font-light">{slide.subtitle}</p>
              <p className="text-lg md:text-xl mb-8 opacity-90">{slide.description}</p>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
      >
        <ChevronRight size={32} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </div>
  );
}
