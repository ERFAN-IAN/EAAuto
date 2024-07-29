"use client";
import { createContext, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
const context = createContext();
const Contextwrapper = ({ children }) => {
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const brands = useSearchParams().getAll("brand")[0]?.split(",") || [];
  const colors = useSearchParams().getAll("color")[0]?.split(",") || [];
  const [allStates, setAllStates] = useState({
    isModalBackgroundOpen: false,
    refreshYear: Math.random(),
    refreshMilage: Math.random(),
    brand: brands.length !== 0 ? [...brands] : ["All"],
    searchText: searchParams?.searchText || "",
    refreshSearchText: Math.random(),
    milageMin: searchParams.milageMin || 0,
    milageMax: searchParams.milageMax || 1000000,
    yearMin: searchParams.yearMin || 1920,
    yearMax: searchParams.yearMax || new Date().getFullYear(),
    category: searchParams.category || "All",
    color: colors.length !== 0 ? [...colors] : ["All"],
    brandModal: false,
    colorModal: false,
    moreFiltersModal: false,
    type: searchParams?.type || "All",
    transmission: searchParams?.transmission || "All",
    sortOpen: false,
    hamMenu: false,
    formBrand: "",
    formBrandModal: false,
    formColor: "",
    formColorModal: false,
    formTransmission: "",
    formType: "",
    categoryForm: "",
    sort: searchParams.sort || "ascending",
  });

  return (
    <context.Provider
      value={{
        allStates,
        setAllStates,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useGlobalContext = () => useContext(context);
const Searchbar = ({ children }) => {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense>
      <Contextwrapper>{children}</Contextwrapper>
    </Suspense>
  );
};
export default Searchbar;
