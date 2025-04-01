import { useState, useEffect } from "react";
import { ChangeableImages } from "../../constants/Data";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ChangeableImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ChangeableImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + ChangeableImages.length) % ChangeableImages.length
    );
  };

  return (
    <div className="relative flex items-center justify-center group mb-10">
      <img
        src={ChangeableImages[currentIndex]}
        alt="carousel"
        className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover"
      />
      <div className="absolute flex w-full justify-between top-1/2 transform -translate-y-1/2">
        <FaAngleLeft
          className="h-8 w-8 text-white bg-black bg-opacity-50 p-2 rounded-r-full cursor-pointer opacity-0 group-hover:opacity-100"
          onClick={prevImage}
        />
        <FaAngleRight
          className="h-8 w-8 text-white bg-black bg-opacity-50 p-2 rounded-l-full cursor-pointer opacity-0 group-hover:opacity-100"
          onClick={nextImage}
        />
      </div>
    </div>
  );
};

export default ImageSection;
