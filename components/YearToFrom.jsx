"use client";
import { useState } from "react";
import { useGlobalContext } from "@/context/context";
import { useEffect } from "react";
const YearToFrom = () => {
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
  } = useGlobalContext();
  const [ymin, setYmin] = useState(yearMin || 1920);
  const [ymax, setYmax] = useState(yearMax || new Date().getFullYear());
  useEffect(() => {
    setYearMin(ymin);
    setYearMax(ymax);
  }, [brand, type, color, transmission, ymin, ymax, searchText]);
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <div className="flex flex-col gap-y-2 w-full">
        <label htmlFor="yearmin" className=" font-semibold">
          From
        </label>
        <input
          type="number"
          id="yearmin"
          className="border-2 rounded-md px-4 py-2"
          min={1920}
          max={ymax}
          onBlur={(e) => {
            // parseInt(e.target.value) > new Date().getFullYear()
            if (
              parseInt(e.target.value) < 1920 ||
              e.target.value.length === 0
            ) {
              setYmin(1920);
              return;
            }
            if (parseInt(e.target.value) > ymax) {
              setYmin(ymax);
              setYmax(
                parseInt(e.target.value) > new Date().getFullYear()
                  ? new Date().getFullYear()
                  : parseInt(e.target.value)
              );
              return;
            }
            setYmin(parseInt(e.target.value));
          }}
          onChange={(e) => {
            if (e.target.value === "") {
              setYmin(" ");
              return;
            }
            setYmin(parseInt(e.target.value));
          }}
          value={ymin}
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
          min={ymin}
          max={new Date().getFullYear()}
          onBlur={(e) => {
            if (parseInt(e.target.value) > new Date().getFullYear()) {
              setYmax(
                parseInt(e.target.value) >= new Date().getFullYear()
                  ? new Date().getFullYear()
                  : parseInt(e.target.value)
              );
              return;
            }
            if (parseInt(e.target.value) < 1920) {
              if (parseInt(e.target.value) < ymin) {
                setYmax(ymin);

                return;
              }
              setYmax(1920);
              return;
            }
            if (parseInt(e.target.value) < ymin) {
              setYmax(parseInt(ymin));
              setYmin(parseInt(e.target.value));
              return;
            }
            if (e.target.value.length === 0) {
              setYmax(parseInt(ymin));
              return;
            }
            setYmax(parseInt(e.target.value));
          }}
          onChange={(e) => {
            if (e.target.value === "") {
              setYmax(" ");
              return;
            }
            setYmax(parseInt(e.target.value));
          }}
          value={ymax}
        />
      </div>
    </div>
  );
};

export default YearToFrom;
