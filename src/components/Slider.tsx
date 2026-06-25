import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText?: string;
  buttonAction?: () => void;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Ahad Khan",
    subtitle:
      "Experience innovation like never before. Build amazing products with cutting-edge technology.",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Moses Kazmi",
    subtitle:
      "Transform your ideas into reality with our powerful platform and intuitive tools.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcvlZBHR-xcAFme0XMRCawdDtUFClBCrWUzg&s",
    buttonText: "Learn More",
  },
  {
    id: 3,
    title: "Khushi Pathak",
    subtitle:
      "Connect with millions of users worldwide and expand your digital presence.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Explore",
  },
  {
    id: 4,
    title: "Kajal Chaurasiya",
    subtitle:
      "Work together seamlessly with integrated tools designed for modern teams.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Start Free",
  },
  {
    id: 5,
    title: "Ayushi Srivastava",
    subtitle:
      "Work together seamlessly with integrated tools designed for modern teams.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Start Free",
  },
  {
    id: 6,
    title: "Aditya Gupta",
    subtitle:
      "Work together seamlessly with integrated tools designed for modern teams.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Start Free",
  },
  {
    id: 7,
    title: "Shreya Asthana",
    subtitle:
      "Work together seamlessly with integrated tools designed for modern teams.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Start Free",
  },
  {
    id: 8,
    title: "Mukesh Yadav",
    subtitle:
      "Work together seamlessly with integrated tools designed for modern teams.",
    image:
      "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Start Free",
  },
  {
    id: 9,
    title: "Gyanesh Gupta",
    subtitle:
      "Connect with millions of users worldwide and expand your digital presence.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Explore",
  },
  {
    id: 10,
    title: "Haider Abbas",
    subtitle:
      "Connect with millions of users worldwide and expand your digital presence.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920",
    buttonText: "Explore",
  },
];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating],
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gray-900">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              index === currentSlide
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-105 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl transform transition-all duration-700 delay-100">
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight transition-all duration-500 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed transition-all duration-500 delay-100 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.subtitle}
                  </p>
                  {slide.buttonText && (
                    <button
                      className={`inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay:
                          index === currentSlide ? "200ms" : "0ms",
                      }}
                    >
                      {slide.buttonText}
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transform group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 sm:w-10 h-2 sm:h-2.5 bg-white shadow-lg"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
