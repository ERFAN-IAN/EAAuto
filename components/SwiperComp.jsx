"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { mainSwiper } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import { FiChevronLeft } from "react-icons/fi";
const SwiperComp = () => {
  return (
    <div className="mt-[.3rem]">
      <div className="hidden lg:block  relative">
        <p className="absolute top-[-2.3rem] left-[1rem] font-semibold">
          Categories
        </p>
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={{
            nextEl: ".sbn",
            prevEl: ".sbp",
          }}
          modules={[Pagination, Navigation]}
          className="mainSwiper mt-12 bg-white"
        >
          {mainSwiper.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-[#eef0f4] relative  hover:text-white rounded-md cursor-pointer transition-all duration-100"
              >
                <p className=" font-semibold text-md ml-4 absolute top-2">
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
        <div className="absolute top-[-2.8rem] right-4 flex text-black z-[2] gap-x-2">
          <div className="sbp cursor-pointer p-2 border-2 rounded-full">
            <FiChevronLeft />
          </div>
          <div className="sbn cursor-pointer p-2 border-2 rounded-full">
            <GoChevronRight />
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden  relative">
        <p className="absolute top-[-2.3rem] left-4 font-semibold">
          Categories
        </p>
        <Swiper
          slidesPerView={6}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={{
            nextEl: ".sbn",
            prevEl: ".sbp",
          }}
          modules={[Pagination, Navigation]}
          className="mainSwiper mt-12 bg-white"
        >
          {mainSwiper.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-[#eef0f4] relative pt-2  hover:text-white rounded-md cursor-pointer transition-all duration-100"
              >
                <p className=" font-semibold text-md ml-4 absolute top-2">
                  {item.title}
                </p>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  className={`  absolute bottom-0 ${
                    index <= 3 ? `mb-[-.4rem]` : `mb-[.5rem]`
                  } w-full translate-x-[.8rem] `}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-[-2.4rem] right-4 flex text-black z-[2] gap-x-2">
          <div className="sbp cursor-pointer p-2 border-2 rounded-full">
            <FiChevronLeft />
          </div>
          <div className="sbn cursor-pointer p-2 border-2 rounded-full">
            <GoChevronRight />
          </div>
        </div>
      </div>
      <div className="md:hidden sm:block hidden relative mt-[7rem]">
        <p className="absolute top-[-2.3rem] left-4 font-semibold">
          Categories
        </p>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={{
            nextEl: ".sbn",
            prevEl: ".sbp",
          }}
          modules={[Pagination, Navigation]}
          className="mainSwiper mt-12 bg-white"
        >
          {mainSwiper.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-[#eef0f4] relative pt-2  hover:text-white rounded-md cursor-pointer transition-all duration-100"
              >
                <p className=" font-semibold text-md ml-4 absolute top-2">
                  {item.title}
                </p>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  className={`  absolute bottom-0 ${
                    index <= 3 ? `mb-[-.2rem]` : `mb-[.5rem]`
                  } w-full translate-x-[.8rem] `}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-[-2.4rem] right-4 flex text-black z-[2] gap-x-2">
          <div className="sbp cursor-pointer p-2 border-2 rounded-full">
            <FiChevronLeft />
          </div>
          <div className="sbn cursor-pointer p-2 border-2 rounded-full">
            <GoChevronRight />
          </div>
        </div>
      </div>
      <div className="sm:hidden  relative">
        <p className="absolute top-[-2.3rem] left-2 font-semibold">
          Categories
        </p>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          //   pagination={{
          //     clickable: true,
          //   }}
          navigation={{
            nextEl: ".sbn",
            prevEl: ".sbp",
          }}
          modules={[Pagination, Navigation]}
          className="mainSwiper mt-28 bg-white"
        >
          {mainSwiper.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className=" bg-[#eef0f4] relative pt-2 hover:text-white rounded-md cursor-pointer"
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
                  className={`  absolute bottom-0 ${
                    index <= 3 ? `mb-[-.2rem]` : `mb-[.5rem]`
                  } w-full translate-x-[.8rem] `}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute top-[-2.4rem] right-2 flex text-black z-[2] gap-x-2">
          <div className="sbp cursor-pointer p-2 border-2 rounded-full">
            <FiChevronLeft />
          </div>
          <div className="sbn cursor-pointer p-2 border-2 rounded-full">
            <GoChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperComp;
