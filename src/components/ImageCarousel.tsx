import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import c1Image from "@/assets/carousel/c1.jpg";
import c2Image from "@/assets/carousel/c2.jpg";
import c3Image from "@/assets/carousel/c3.jpg";
import c4Image from "@/assets/carousel/c4.jpg";

const images = [
  { src: c1Image, alt: "Creative Minds Drawing Competition 2025" },
  { src: c2Image, alt: "Creative Minds Talent Hunt Exam 2025" },
  { src: c3Image, alt: "Creative Minds Drawing Competition - Morning Session" },
  { src: c4Image, alt: "Creative Minds Drawing Competition - Afternoon Session" }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'translate-x-0' : 
              index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
          onClick={goToNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-muted'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;