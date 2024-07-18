"use client";
import MobileNav from "@/components/MobileNav";
import SearchBox from "@/components/SearchBox";
import SideFilters from "@/components/SideFilters";
import SearchResult from "@/components/SearchResult";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/context";
const page = () => {
  const {
    brand,
    handleBrand,
    setBrandModal,
    moreFiltersModal,
    setMoreFiltersModal,
    type,
    setType,
    setColorModal,
    color,
    handleColor,
    transmission,
    setTransmission,
    yearMin,
    setYearMin,
    yearMax,
    setYearMax,
    refreshYear,
    setRefreshYear,
  } = useGlobalContext();
  useEffect(() => {
    handleBrand("All");
    setType("All");
    handleColor("All");
    setTransmission("All");
    setYearMax(2024);
    setYearMin(1920);
    setRefreshYear(Math.random());
  }, []);
  return (
    <div className=" mt-[5rem] md:mt-[3rem]">
      <MobileNav />
      <SearchBox />
      <div className="grid grid-cols-12">
        <div className=" col-span-4">
          <SideFilters />
        </div>
        <div className=" col-span-8">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default page;
