import { Swiper, SwiperSlide } from "swiper/react";
import { GoChevronRight } from "react-icons/go";
import { FiChevronLeft } from "react-icons/fi";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const SwiperSingleCarPage = ({ images, type }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (!images) {
    return (
      <div className="bg-white w-full">
        <div className="bg-white animate-pulse rounded-xl shadow-lg w-full relative">
          <div className="w-[100%]  flex flex-col gap-y-4 rounded-xl  relative p-[37%]">
            <div className="w-full dark:bg-slate-300 rounded-xl absolute p-[37%] inset-0"></div>
          </div>
          <div className="w-full relative mt-2 flex gap-x-3 rounded-xl p-[9%]">
            <div className="bg-slate-200 dark:bg-slate-300  rounded-xl absolute p-[9%] left-0 top-0 right-[76%] bottom-0 border-2"></div>
            <div className="bg-slate-200 dark:bg-slate-300  rounded-xl absolute p-[9%] left-[25%] top-0 right-[51%] bottom-0"></div>
            <div className="bg-slate-200 dark:bg-slate-300  rounded-xl absolute p-[9%] left-[50%] top-0 right-[26%] bottom-0"></div>
            <div className="bg-slate-200 dark:bg-slate-300  rounded-xl absolute p-[9%] left-[75%] top-0 right-0 bottom-0"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" bg-white">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".sbn",
          prevEl: ".sbp",
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
        modules={[Navigation, Thumbs]}
        className=" rounded-xl group relative max-h-[35rem]"
      >
        <div className="absolute top-2 left-2 z-10 bg-green-600 rounded-xl p-2 text-white">
          {type || null}
        </div>
        {images?.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className=" bg-[#eef0f4] z-[-100] hover:text-white rounded-md cursor-pointer transition-all duration-100  object-center"
            >
              <Image
                src={item.secure_url}
                width={0}
                height={0}
                sizes="100vw"
                alt=""
                className={`w-full object-cover max-h-[30rem]`}
              />
            </SwiperSlide>
          );
        })}

        <div className="hidden md:block absolute left-2 top-[50%] translate-y-[-50%] z-10 bg-slate-200 brightness-90 sbp cursor-pointer p-2  rounded-full opacity-0 group-hover:opacity-100 duration-200 transition-opacity">
          <FiChevronLeft />
        </div>

        <div className="hidden md:block absolute z-10 right-2 top-[50%] translate-y-[-50%] bg-slate-200 brightness-90 cursor-pointer  rounded-full p-2 text-black sbn opacity-0 group-hover:opacity-100 duration-200 transition-opacity">
          <GoChevronRight />
        </div>
      </Swiper>
      <div className="bg-white">
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className="gallery-thumbs mt-2 bg-white"
          slidesPerView={4}
          spaceBetween={10}
        >
          {images?.map((item, index) => {
            return (
              <SwiperSlide key={index} className=" cursor-pointer">
                <Image
                  src={item.secure_url}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  className={`w-full object-cover rounded-md`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSingleCarPage;
