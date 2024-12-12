"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductCarouselBody = () => {
  const products = [
    {
      id: 1,
      name: "ĐÈN ĐƯỜNG NĂNG LƯỢNG MẶT TRỜI SOKOYO INTENSE 40W, 50W, 60W",
      power: "40W - 60W",
      brand: "Sokoyo",
      image: "/assets/images/products/den-led.png",
    },
    {
      id: 2,
      name: "ĐÈN ĐƯỜNG NĂNG LƯỢNG MẶT TRỜI SOKOYO AMBO 30W",
      power: "30W",
      brand: "Sokoyo",
      image: "/assets/images/products/den-led.png",
    },
    {
      id: 3,
      name: "ĐÈN ĐƯỜNG NĂNG LƯỢNG MẶT TRỜI SOKOYO NOVA 30W, 40W, 50W, 60W",
      power: "30W - 60W",
      brand: "Sokoyo",
      image: "/assets/images/products/den-led.png",
    },
    {
      id: 4,
      name: "ĐÈN ĐƯỜNG NĂNG LƯỢNG MẶT TRỜI SOKOYO NOVA 30W, 40W, 50W, 60W",
      power: "30W - 60W",
      brand: "Sokoyo",
      image: "/assets/images/products/den-led.png",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="mb-8 items-center rounded-lg border border-solid border-gray-200 shadow-md">
            <div className="grid min-h-64 grid-cols-3 p-10 py-12">
              <div className="col-span-1 flex w-full items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="col-span-2 mt-4 text-start">
                <h3 className="mb-5 text-sm">{product.name}</h3>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Công suất:&nbsp;</span>
                  {product.power}
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-bold">Hãng:&nbsp;</span>
                  {product.brand}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarouselBody;
