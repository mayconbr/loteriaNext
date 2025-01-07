import Image from "next/image";
import Banner1 from "../../public/1.jpg";
import Banner2 from "../../public/2.png";
import Banner3 from "../../public/3.jpg";
import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: "Slide 1", image: Banner1 },
    { id: 2, content: "Slide 2", image: Banner2 },
    { id: 3, content: "Slide 3", image: Banner3 },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-64 relative flex items-center justify-center text-white text-2xl font-bold"
          >
            {/* Exibindo a imagem */}
            <Image
              src={slide.image}
              alt={slide.content}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
