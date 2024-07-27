"use client";
import { useGlobalContext } from "@/context/context";
import { RxCross2 } from "react-icons/rx";
import RectSelector from "./RectSelector";
import { types, transmissions } from "@/data";
import ChevronSelector from "./ChevronSelector";
import YearToFrom from "./YearToFrom";
import MilageToFrom from "./MilageToFrom";
import Category from "./Category";
function MoreFilters() {
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
    refreshMilage,
    setRefreshMilage,
    milageMin,
    setMilageMin,
    milageMax,
    setMilageMax,
    category,
    handlecategory,
  } = useGlobalContext();
  if (moreFiltersModal) {
    return (
      <main className=" fixed top-0 left-0 w-full md:hidden h-full bg-white z-[60] overflow-y-scroll">
        <div className=" border-b-2 pl-6  py-4 font-semibold  flex justify-between">
          <button
            type="button"
            className="p-2 ml-2 text-sm"
            onClick={() => {
              handleBrand("All");
              setType("All");
              handleColor("All");
              setTransmission("All");
              setYearMax(2024);
              setYearMin(1920);
              setRefreshYear(Math.random());
              setMilageMin(0),
                setMilageMax(1000000),
                setRefreshMilage(Math.random());
              handlecategory("All");
            }}
          >
            Clear filters
          </button>
          <button
            className=" text-2xl p-2 mr-2"
            type="button"
            onClick={() => {
              setMoreFiltersModal(false);
              document.body.style.overflowY = "visible";
            }}
          >
            <RxCross2 />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-y-4">
          <RectSelector
            data={types}
            state={type}
            handleState={setType}
            title={"Type of car"}
          />
          <ChevronSelector
            setModal={setBrandModal}
            data={brand}
            title={"Brand"}
          />
          <ChevronSelector
            setModal={setColorModal}
            data={color}
            title={"Color"}
          />
          <RectSelector
            data={transmissions}
            state={transmission}
            handleState={setTransmission}
            title={"Transmission"}
          />
          <YearToFrom key={refreshYear} />
          <MilageToFrom key={refreshMilage} />
          <Category handleFunc={handlecategory} category={category} />
        </div>
      </main>
    );
  }
  return null;
}

export default MoreFilters;
