"use client";
import { createContext, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useContext } from "react";
const context = createContext();
const Contextwrapper = ({ children }) => {
  const [isModalBackgroundOpen, setIsModalBackgroundOpen] = useState(false);
  const [refreshYear, setRefreshYear] = useState(Math.random());
  const [refreshMilage, setRefreshMilage] = useState(Math.random());
  const searchParams = Object.fromEntries(useSearchParams()) || null;
  const brands = useSearchParams().getAll("brand") || [];
  const colors = useSearchParams().getAll("color") || [];
  const [brand, setBrand] = useState(
    brands.length !== 0 ? [...brands] : ["All"]
  );
  const [searchText, setSearchText] = useState(searchParams?.searchText || "");
  const [refreshSearchText, setRefreshSearchText] = useState(Math.random());
  const [milageMin, setMilageMin] = useState(searchParams.milageMin || 0);
  const [milageMax, setMilageMax] = useState(searchParams.milageMax || 1000000);
  const [yearMin, setYearMin] = useState(searchParams.yearMin || 1920);
  const [category, setcategory] = useState("All");
  const handlecategory = (item) => {
    if (item === category) {
      setcategory("All");
    } else {
      setcategory(item);
    }
  };
  const [yearMax, setYearMax] = useState(
    searchParams.yearMax || new Date().getFullYear()
  );
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
  const [sortOpen, setSortOpen] = useState(false);
  const [hamMenu, setHamMenu] = useState(false);
  const handleBrand = (item) => {
    let newArray = brand.filter((e) => e != "All");
    if (item === "All") {
      setBrand(["All"]);
    } else if (!brand.includes(item)) {
      setBrand([...newArray, item]);
    } else {
      let temp = brand.filter((e) => e != item);
      setBrand(temp.length === 0 ? ["All"] : temp);
    }
  };
  const handleColor = (item) => {
    let newArray = color.filter((e) => e != "All");
    if (item === "All") {
      setColor(["All"]);
    } else if (!color.includes(item)) {
      setColor([...newArray, item]);
    } else {
      let temp = color.filter((e) => e != item);
      setColor(temp.length === 0 ? ["All"] : temp);
    }
  };
  const [formBrand, setFormBrand] = useState("");
  const [formBrandModal, setFormBrandModal] = useState(false);
  const [formColor, setFormColor] = useState("");
  const [formColorModal, setFormColorModal] = useState(false);
  const [formTransmission, setFormTransmission] = useState("");
  const [formType, setFormType] = useState("");
  const [categoryForm, setcategoryForm] = useState("");

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
        isModalBackgroundOpen,
        setIsModalBackgroundOpen,
        milageMin,
        setMilageMin,
        milageMax,
        setMilageMax,
        refreshMilage,
        setRefreshMilage,
        formBrand,
        setFormBrand,
        formColor,
        setFormColor,
        formTransmission,
        setFormTransmission,
        formType,
        setFormType,
        formBrandModal,
        setFormBrandModal,
        formColorModal,
        setFormColorModal,
        category,
        handlecategory,
        categoryForm,
        setcategoryForm,
        sortOpen,
        setSortOpen,
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
