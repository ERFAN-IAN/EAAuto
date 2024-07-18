"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchAdverts } from "@/utils/requets";
import { useGlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import CarAdvert from "./CarAdvert";
const SearchResult = () => {
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
    searchText,
    setSearchText,
    yearMin,
    setYearMin,
    yearMax,
    setYearMax,
  } = useGlobalContext();
  const router = useRouter();
  const initial = useRef(0);
  useEffect(() => {
    if (initial.current <= 1) {
      initial.current++;
      return;
    }
    if (
      yearMax.toString().length !== 4 ||
      yearMin.toString().length !== 4 ||
      yearMin > yearMax ||
      yearMin < 1920 ||
      yearMax > new Date().getFullYear()
    ) {
      console.log(typeof yearMax);
      console.log(yearMax.toString().length);
      return;
    }

    const obj = {
      brand,
      type,
      color,
      transmission,
      searchText,
      yearMin,
      yearMax,
    };
    const queryString = new URLSearchParams(obj);
    router.push(`/search?${queryString.toString()}`, { scroll: false });
  }, [type, color, transmission, brand, searchText, yearMax, yearMin]);
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const { data } = useQuery(fetchAdverts(searchParams));
  const cars = data?.car;
  return (
    <section>
      {cars?.map((item, index) => {
        return <CarAdvert car={item} key={index} />;
      })}
    </section>
  );
};

export default SearchResult;
