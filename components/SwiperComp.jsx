"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { mainSwiper } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
import LoadingComp from "./LoadingComp";
const SwiperComp = () => {
  const [slidesPerViewNumber, setSlidesPerViewNumber] = useState(1);
  const [load, setLoad] = useState(false);
  const router = useRouter();
  const handleScreenSize = () => {
    if (window.innerWidth < 450) {
      setSlidesPerViewNumber(3);
      return;
    }
    if (window.innerWidth < 600) {
      setSlidesPerViewNumber(4);
      return;
    }

    if (window.innerWidth < 768) {
      if (slidesPerViewNumber === 5) {
        return;
      }
      setSlidesPerViewNumber(5);
      return;
    }
    if (window.innerWidth < 1024) {
      if (slidesPerViewNumber === 6) {
        return;
      }
      setSlidesPerViewNumber(6);
      return;
    }
    if (window.innerWidth > 1024) {
      if (slidesPerViewNumber === 7) {
        return;
      }
      setSlidesPerViewNumber(7);
      return;
    }
  };
  useEffect(() => {
    handleScreenSize();
    setLoad(true);
    window.addEventListener("resize", handleScreenSize);
  }, []);
  if (!load) {
    return (
      <div className="flex justify-center items-center mt-16 h-[11.2rem] md:h-[8.2rem]">
        <LoadingComp />
      </div>
    );
  }
  return (
    <div className=" flex flex-col w-full px-4 gap-y-4 mt-16 md:mt-4">
      <div className="flex justify-between items-center">
        <p className="font-semibold">Categories</p>
        <div className=" flex text-black z-[2] gap-x-2">
          <div className="sbp cursor-pointer p-2 border-2 rounded-full">
            <FiChevronLeft />
          </div>
          <div className="sbn cursor-pointer p-2 border-2 rounded-full">
            <GoChevronRight />
          </div>
        </div>
      </div>
      <div className="">
        <Swiper
          slidesPerView={slidesPerViewNumber}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={{
            nextEl: ".sbn",
            prevEl: ".sbp",
          }}
          modules={[Pagination, Navigation]}
          className="mainSwiper bg-white"
        >
          {mainSwiper.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-[#eef0f4] relative  hover:text-white rounded-md cursor-pointer transition-all duration-100"
                onClick={() => router.push(`/search?${item.query}`)}
              >
                <p className=" font-semibold text-md ml-2 absolute top-2">
                  {item.title}
                </p>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  className={` absolute bottom-0 ${
                    index <= 3 ? `mb-[-.2rem]` : `mb-[.5rem]`
                  } w-full translate-x-[.8rem] `}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComp;
