"use client";
import { useState } from "react";
import { useGlobalContext } from "@/context/context";
import { useEffect } from "react";
const MilageToFrom = () => {
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
    searchText,
    setSearchText,
    milageMin,
    setMilageMin,
    milageMax,
    setMilageMax,
  } = useGlobalContext();
  const [mMin, setMMin] = useState(milageMin || 0);
  const [mMax, setMMax] = useState(milageMax || 1000000);
  useEffect(() => {
    setMilageMin(mMin);
    setMilageMax(mMax);
  }, [brand, type, color, transmission, mMin, mMax, searchText]);
  return (
    <div className="flex items-end gap-x-2">
      <h4 className=" font-semibold mb-[.8rem] pr-[.415rem]">Km</h4>
      <div className="grid grid-cols-2 gap-x-2 w-full">
        <div className="flex flex-col gap-y-2 w-full ">
          <label htmlFor="yearmin" className=" font-semibold">
            From
          </label>
          <input
            type="number"
            id="yearmin"
            className="border-2 rounded-md px-4 py-2"
            min={0}
            max={mMax}
            onBlur={(e) => {
              if (parseInt(e.target.value) < 0 || e.target.value.length === 0) {
                setMMin(0);
                return;
              }
              if (parseInt(e.target.value) > mMax) {
                setMMin(mMax);
                setMMax(
                  parseInt(e.target.value) > 1000000
                    ? 1000000
                    : parseInt(e.target.value)
                );
                return;
              }
              setMMin(parseInt(e.target.value));
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setMMin(" ");
                return;
              }
              setMMin(parseInt(e.target.value));
            }}
            value={mMin}
          />
        </div>
        <div className="flex flex-col gap-y-2 w-full">
          <label htmlFor="yearmax" className=" font-semibold">
            To
          </label>
          <input
            type="number"
            id="yearmax"
            className="border-2 rounded-md px-4 py-2"
            min={mMin}
            max={1000000}
            onBlur={(e) => {
              if (parseInt(e.target.value) > 1000000) {
                setMMax(
                  parseInt(e.target.value) >= 1000000
                    ? 1000000
                    : parseInt(e.target.value)
                );
                return;
              }
              if (parseInt(e.target.value) < 0) {
                if (parseInt(e.target.value) < mMin) {
                  setMMax(mMin);

                  return;
                }
                setMMax(0);
                return;
              }
              if (parseInt(e.target.value) < mMin) {
                setMMax(parseInt(mMin));
                setMMin(parseInt(e.target.value));
                return;
              }
              if (e.target.value.length === 0) {
                setMMax(parseInt(mMin));
                return;
              }
              setMMax(parseInt(e.target.value));
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setMMax(" ");
                return;
              }
              setMMax(parseInt(e.target.value));
            }}
            value={mMax}
          />
        </div>
      </div>
    </div>
  );
};

export default MilageToFrom;
