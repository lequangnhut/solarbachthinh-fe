"use client";

import Image from "next/image";
import { cn } from "@/utils";
import { setHomeProps } from "@/reduxs/HomeSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

const HomeDots = () => {
  const dispatch = useAppDispatch();
  const isActiveSlide = useAppSelector((state) => state.home.isActiveSlide);

  const slides = [
    {
      src: "/assets/images/base/carousel-1.jpg",
      title: "Pioneers Of Solar And Renewable Energy",
      description:
        "Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.",
    },
    {
      src: "/assets/images/base/carousel-2.jpg",
      title: "Innovations in Renewable Energy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      src: "/assets/images/base/carousel-3.jpg",
      title: "Towards a Sustainable Future",
      description:
        "Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const handleDotClick = (index: number) => {
    dispatch(setHomeProps({ isActiveSlide: index }));
  };

  return (
    <div className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 transform flex-col gap-5">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "relative cursor-pointer rounded-full",
            isActiveSlide === index
              ? "border-4 border-green-500"
              : "border-2 border-gray-300",
          )}
          onClick={() => handleDotClick(index)}
        >
          <Image
            src={slide.src}
            alt={`Dot ${index + 1}`}
            width={60}
            height={60}
            className={cn(
              "h-12 w-12 rounded-full border-2 border-solid border-white object-cover shadow-lg transition-transform duration-300",
              isActiveSlide === index ? "scale-125" : "scale-100",
            )}
          />
          {isActiveSlide === index && (
            <div className="absolute inset-0 animate-pulse rounded-full border-2 border-white"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomeDots;
