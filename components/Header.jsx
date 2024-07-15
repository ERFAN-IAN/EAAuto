"use client";
import Image from "next/image";
import mobileh from "/assets/images/mobileh.jpg";
import desktoph from "@/assets/images/desktoph.jpg";
import SearchBox from "./SearchBox";
import ChevronSelector from "./ChevronSelector";
import { useGlobalContext } from "@/context/context";
import { useState } from "react";

const Header = () => {
  const { brand, setBrandModal } = useGlobalContext();
  const [buysell, setBuysell] = useState(false);
  return (
    <section className="grid grid-rows-1 md:relative w-full h-[24rem] mt-[3rem] md:mt-[2rem] md:rounded-t-lg">
      <div className="row-span-4 inset-0 absolute top-[4rem] md:top-0 z-[-2] md:rounded-t-lg">
        <Image
          src={mobileh}
          width={0}
          height={0}
          sizes="100vw"
          alt="header"
          className=" md:hidden max-h-[24rem] w-full object-cover"
        />
        <Image
          src={desktoph}
          width={0}
          height={0}
          sizes="100vw"
          alt="header"
          className=" hidden md:block max-h-[24rem] w-full h-full object-cover md:rounded-t-lg"
        />
      </div>

      <div className="grid  md:grid-cols-2 items-center  px-4 md:px-12 z-3">
        <h2 className=" text-white font-bold mt-[2.5rem] md:mt-0  text-4xl max-w-44 md:max-w-80 leading-10">
          What's your next move?
        </h2>
        <div className=" rounded-xl shadow-lg mt-[2rem] md:mt-0 bg-white flex flex-col">
          <div className="grid grid-cols-2">
            <button
              onClick={() => setBuysell(false)}
              className={`${
                !buysell
                  ? "border-b-2 border-black"
                  : "border-b-2 border-gray-100"
              } py-4 font-semibold`}
            >
              Buy
            </button>
            <button
              onClick={() => setBuysell(true)}
              className={`${
                buysell
                  ? "border-b-2 border-black text-black"
                  : "border-b-2 border-gray-100"
              } py-4 font-semibold text-lg`}
            >
              Sell
            </button>
          </div>
          <div className="mt-2 p-4">
            <SearchBox place={"Header"}>
              <div className="mt-[-.5rem]">
                <ChevronSelector
                  setModal={setBrandModal}
                  data={brand}
                  place={"Header"}
                  brand={brand}
                />
              </div>
            </SearchBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
