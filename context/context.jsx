"use client";
import { createContext, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
const context = createContext();
const Contextwrapper = ({ children }) => {
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const brands = useSearchParams().getAll("brand") || [];
  const colors = useSearchParams().getAll("color") || [];
  const [brand, setBrand] = useState(
    brands.length !== 0 ? [...brands] : ["All"]
  );
  const [searchText, setSearchText] = useState(searchParams?.searchText || "");
  const [color, setColor] = useState(
    colors.length !== 0 ? [...colors] : ["All"]
  );
  const [brandModal, setBrandModal] = useState(false);
  const [colorModal, setColorModal] = useState(false);
  const [moreFiltersModal, setMoreFiltersModal] = useState(false);
  const [type, setType] = useState(searchParams?.type || "All");
  const [transmission, setTransmission] = useState(
    searchParams?.transmission || "All"
  );
  const [hamMenu, setHamMenu] = useState(false);
  const handleBrand = (item) => {
    let newArray = brand.filter((e) => e != "All");
    if (item === "All") {
      setBrand(["All"]);
    } else if (!brand.includes(item)) {
      setBrand([...newArray, item]);
    } else {
      setBrand(brand.filter((e) => e != item));
    }
  };
  const handleColor = (item) => {
    let newArray = color.filter((e) => e != "All");
    if (item === "All") {
      setColor(["All"]);
    } else if (!color.includes(item)) {
      setColor([...newArray, item]);
    } else {
      setColor(color.filter((e) => e != item));
    }
  };
  return (
    <context.Provider
      value={{
        brand,
        handleBrand,
        brandModal,
        setBrandModal,
        moreFiltersModal,
        setMoreFiltersModal,
        type,
        setType,
        colorModal,
        setColorModal,
        color,
        handleColor,
        searchText,
        setSearchText,
        transmission,
        setTransmission,
        hamMenu,
        setHamMenu,
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
