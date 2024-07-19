"use client";
import SearchBox from "@/components/SearchBox";
import SideFilters from "@/components/SideFilters";
import SearchResult from "@/components/SearchResult";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/context";
import { useSearchParams } from "next/navigation";
const SearchPageMainComp = () => {
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
    refreshSearchText,
    setRefreshSearchText,
    setSearchText,
    brandModal,
    colorModal,
  } = useGlobalContext();
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const colors = useSearchParams().getAll("color") || "All";
  const brands = useSearchParams().getAll("brand") || "All";
  useEffect(() => {
    setBrand(brands.length === 0 ? ["All"] : brands);
    setType(searchParams?.type || "All");
    setColor(colors.length === 0 ? ["All"] : colors);
    setTransmission("All");
    setSearchText("");
    setYearMax(searchParams.yearMax || new Date().getFullYear());
    setYearMin(searchParams.yearMin || 1920);
    setRefreshYear(Math.random());
    setRefreshSearchText(Math.random());
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.body.style.overflow = "visible";
      }
    });
  }, []);
  return (
    <div className="flex flex-col">
      <SearchBox key={refreshSearchText} />
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

export default SearchPageMainComp;
