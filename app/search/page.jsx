"use client";
import MobileNav from "@/components/MobileNav";
import SearchBox from "@/components/SearchBox";
import SideFilters from "@/components/SideFilters";
import SearchResult from "@/components/SearchResult";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/context";
import { useSearchParams } from "next/navigation";
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
    setColor,
    setBrand,
  } = useGlobalContext();
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const colors = useSearchParams().getAll("color") || "All";
  const brands = useSearchParams().getAll("brand") || "All";
  useEffect(() => {
    setBrand(brands.length === 0 ? ["All"] : brands);
    setType(searchParams?.type || "All");
    setColor(colors.length === 0 ? ["All"] : colors);
    setTransmission("All");
    setYearMax(searchParams.yearMax || new Date().getFullYear());
    setYearMin(searchParams.yearMin || 1920);
    setRefreshYear(Math.random());
  }, []);
  return (
    <div className=" mt-[5rem] md:mt-[3rem]">
      <MobileNav />
      <SearchBox />
      <div className="grid grid-cols-12 gap-x-4 mt-4">
        <div className=" col-span-4">
          <SideFilters />
        </div>
        <div className=" col-span-12 md:col-span-8">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default page;
