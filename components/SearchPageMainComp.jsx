"use client";
import SearchBox from "@/components/SearchBox";
import SideFilters from "@/components/SideFilters";
import SearchResult from "@/components/SearchResult";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/context";
import { useSearchParams } from "next/navigation";
import Pagination from "./Pagination";
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
    category,
    handlecategory,
    sort,
    setSort,
  } = useGlobalContext();
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const colors = useSearchParams().getAll("color")[0]?.split(",") || ["All"];
  const brands = useSearchParams().getAll("brand")[0]?.split(",") || ["All"];
  useEffect(() => {
    setBrand(brands.length === 0 ? ["All"] : brands);
    setType(searchParams?.type || "All");
    setColor(colors.length === 0 ? ["All"] : colors);
    setTransmission(searchParams.transmission || "All");
    setSearchText(searchParams.searchText || "");
    setYearMax(searchParams.yearMax || new Date().getFullYear());
    setYearMin(searchParams.yearMin || 1920);
    handlecategory(searchParams.category || "All");
    setRefreshYear(Math.random());
    setSort(searchParams.sort || "ascending");
    // setRefreshSearchText(Math.random());
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        document.body.style.overflowY = "visible";
      }
    });
  }, []);
  return (
    <div className="flex flex-col h-full">
      <SearchBox key={refreshSearchText} />
      <div className="grid grid-cols-12 gap-x-4 mt-4 h-full">
        <div className=" col-span-4 self-start relative z-[50]">
          <SideFilters />
        </div>
        <div className=" col-span-12 md:col-span-8">
          <SearchResult />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default SearchPageMainComp;
