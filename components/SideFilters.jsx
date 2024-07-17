"use client";
import RectSelector from "./RectSelector";
import { types, transmissions } from "@/data";
import ChevronSelector from "./ChevronSelector";
import { useGlobalContext } from "@/context/context";
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
  } = useGlobalContext();
  return (
    <main className=" w-full hidden md:flex flex-col h-full bg-white z-40">
      <div className=" border-b-2 pl-6  py-4 font-semibold  flex justify-between ">
        <button
          type="button"
          className="p-2 ml-2 text-sm"
          onClick={() => {
            handleBrand("All");
            setType("All");
            handleColor("All");
            setTransmission("All");
          }}
        >
          Clear filters
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
        <div className="flex flex-col gap-y-2">
          <label htmlFor="year" className=" font-semibold">
            Year
          </label>
          <input
            type="number"
            id="year"
            className="border-2 rounded-md px-4 py-2"
            min={1920}
            max={new Date().getFullYear()}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="milage" className="font-semibold">
            Milage
          </label>
          <input
            type="number"
            id="milage"
            className="border-2 rounded-md px-4 py-2"
            min={0}
          />
        </div>

        <select name="number" id="number" className="w-full">
          <option value="all">All</option>
          <option value="BMW">BMW</option>
          <option value="Audi">Audi</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Lamborgini">Lamborgini</option>
          <option value="Porche">Porche</option>
        </select>
      </div>
    </main>
  );
};

export default SideFilters;
