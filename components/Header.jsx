"use client";
import Image from "next/image";
import mobileh from "/assets/images/mobileh.jpg";
import desktoph from "@/assets/images/desktoph.jpg";
import SearchBox from "./SearchBox";
import ChevronSelector from "./ChevronSelector";
import { useGlobalContext } from "@/context/context";
import { useState } from "react";
import MultiSelectDesktop from "./MultiSelectDesktop";
import { colors, brands } from "@/data";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
const Header = () => {
  const {
    brand,
    setBrandModal,
    brandModal,
    handleBrand,
    setIsModalBackgroundOpen,
    isModalBackgroundOpen,
    searchText,
    setBrand,
    refreshSearchText,
    setRefreshSearchText,
    setSearchText,
  } = useGlobalContext();
  const [buysell, setBuysell] = useState(false);
  const router = useRouter();
  const initial = useRef(0);
  useEffect(() => {
    setBrand(["All"]);
    setSearchText("");
    setRefreshSearchText(Math.random());
  }, []);
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
          What's your next journey?
        </h2>
        <div
          className={`${
            isModalBackgroundOpen ? `z-50` : ``
          } rounded-xl shadow-lg mt-[2rem] md:mt-0 bg-white flex flex-col`}
        >
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
          <div className="h-[12rem]">
            {buysell && (
              <div className="mt-2 px-4 pt-[2.71rem] pb-4 flex flex-col justify-center gap-y-[2.99rem]">
                <p className="block text-center text-xl">
                  Sell your car on{" "}
                  <span className=" font-bold text-black">EA </span>
                  <span className="font-bold text-red-600">Auto</span>
                </p>
                <Link href={"/newAd"} className="w-full">
                  <button className="bg-black text-white px-4 py-2 rounded-md w-full">
                    Post Advert
                  </button>
                </Link>
              </div>
            )}
            {!buysell && (
              <div className="mt-2 p-4">
                <SearchBox place={"Header"} key={refreshSearchText}>
                  <div className={`mt-[-.5rem] relative `}>
                    <div
                      onClick={() => {
                        setIsModalBackgroundOpen(true);
                      }}
                    >
                      <ChevronSelector
                        setModal={setBrandModal}
                        data={brand}
                        place={"Header"}
                        brand={brand}
                      />
                    </div>

                    <MultiSelectDesktop
                      name={"brand"}
                      data={brands}
                      setModal={setBrandModal}
                      modalState={brandModal}
                      handleFunction={handleBrand}
                      arrayResult={brand}
                      headerpage={true}
                    />
                  </div>
                </SearchBox>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
