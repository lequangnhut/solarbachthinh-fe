"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Button } from "@/components/ui/Button";
import { setHomeProps } from "@/reduxs/HomeSlice";
import { Navigation, Autoplay } from "swiper/modules";
import { useAppDispatch, useAppSelector } from "@/hooks/store";

const HomeCarousel = () => {
  const dispatch = useAppDispatch();
  const swiperRef = useRef<SwiperClass | null>(null);
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

  useEffect(() => {
    if (swiperRef.current && typeof isActiveSlide === "number") {
      const currentSlide = swiperRef.current.realIndex;
      if (currentSlide !== isActiveSlide) {
        swiperRef.current.slideToLoop(isActiveSlide);
      }
    }
  }, [isActiveSlide]);

  const handleSetIndex = (index: number) => {
    if (index !== isActiveSlide) {
      dispatch(setHomeProps({ isActiveSlide: index }));
    }
  };

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000 }}
      loop
      onSlideChange={(swiper) => handleSetIndex(swiper.realIndex)}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      className="h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={slide.src}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center bg-black bg-opacity-20 px-3 md:px-20">
            <h1 className="mb-4 text-5xl font-bold text-white md:w-2/3 md:text-7xl">
              {slide.title}
            </h1>
            <p className="mb-6 w-2/3 text-white md:text-2xl">
              {slide.description}
            </p>
            <Button className="rounded-full bg-primary px-9 py-3 text-white hover:bg-primary-bold">
              Đọc thêm
            </Button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeCarousel;
