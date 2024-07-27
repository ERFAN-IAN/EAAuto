"use client";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchAdverts } from "@/utils/requets";
import { useGlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRef } from "react";
import CarAdvert from "./CarAdvert";
import LoadingComp from "./LoadingComp";
import Sort from "./Sort";
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
    milageMin,
    setMilageMin,
    milageMax,
    setMilageMax,
    category,
    handlecategory,
    sort,
    setSort,
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
      yearMax > new Date().getFullYear() ||
      milageMin > milageMax
    ) {
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
      milageMin,
      milageMax,
      category,
      sort,
    };
    const queryString = new URLSearchParams(obj);
    router.push(`/search?${queryString.toString()}`, { scroll: false });
  }, [
    type,
    color,
    transmission,
    brand,
    searchText,
    yearMax,
    yearMin,
    milageMin,
    milageMax,
    category,
    sort,
  ]);
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const { data, isLoading } = useQuery(fetchAdverts(searchParams));
  const cars = data?.car;
  const total = data?.total;
  if (cars?.length === 0) {
    return <p className=" font-semibold text-2xl">No results...</p>;
  }
  return (
    <section className="flex flex-col gap-y-4">
      <Sort />
      {!isLoading ? (
        cars?.map((item, index) => {
          return <CarAdvert car={item} key={index} />;
        })
      ) : (
        <div className="my-40">
          <LoadingComp />
        </div>
      )}
    </section>
  );
};

export default SearchResult;
