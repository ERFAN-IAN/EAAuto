"use client";
import RectSelector from "./RectSelector";
import { types, transmissions } from "@/data";
import ChevronSelector from "./ChevronSelector";
import { useGlobalContext } from "@/context/context";
import YearToFrom from "./YearToFrom";
import MultiSelectDesktop from "./MultiSelectDesktop";
import { colors, brands } from "@/data";
import MilageToFrom from "./MilageToFrom";
const SideFilters = () => {
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
    brandModal,
    colorModal,
    setIsModalBackgroundOpen,
    isModalBackgroundOpen,
    refreshMilage,
    setRefreshMilage,
    milageMin,
    setMilageMin,
    milageMax,
    setMilageMax,
  } = useGlobalContext();
  return (
    <div
      className={`w-full hidden md:flex flex-col h-full bg-white relative rounded-xl ${
        isModalBackgroundOpen && `z-50`
      }`}
    >
      <div className=" border-b-2 pl-6  py-4 font-semibold  flex justify-between ">
        <button
          type="button"
          className="p-2 ml-2 text-sm"
          onClick={() => {
            handleBrand("All");
            setType("All");
            handleColor("All");
            setTransmission("All");
            setYearMin(1920);
            setYearMax(2024);
            setMilageMin(0),
              setMilageMax(1000000),
              setRefreshYear(Math.random());
            setRefreshMilage(Math.random());
          }}
        >
          Clear filters
        </button>
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <RectSelector
          data={types}
          state={type}
          handleState={setType}
          title={"Type of car"}
        />
        <div className=" relative">
          <div
            onClick={() => {
              setIsModalBackgroundOpen(true);
              setColorModal(false);
            }}
          >
            <ChevronSelector
              setModal={setBrandModal}
              data={brand}
              title={"Brand"}
            />
          </div>

          <MultiSelectDesktop
            name={"brand"}
            data={brands}
            setModal={setBrandModal}
            modalState={brandModal}
            handleFunction={handleBrand}
            arrayResult={brand}
          />
        </div>
        <div className=" relative">
          <div
            onClick={() => {
              setIsModalBackgroundOpen(true);
              setBrandModal(false);
            }}
          >
            <ChevronSelector
              setModal={setColorModal}
              data={color}
              title={"Color"}
            />
          </div>

          <MultiSelectDesktop
            name={"color"}
            data={colors}
            setModal={setColorModal}
            modalState={colorModal}
            handleFunction={handleColor}
            arrayResult={color}
          />
        </div>
        <RectSelector
          data={transmissions}
          state={transmission}
          handleState={setTransmission}
          title={"Transmission"}
        />
        <YearToFrom key={refreshYear} />
        <MilageToFrom key={refreshMilage} />

        <select name="number" id="number" className="w-full">
          <option value="all">All</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Lamborgini">Lamborgini</option>
          <option value="Porche">Porche</option>
        </select>
      </div>
    </div>
  );
};

export default SideFilters;
