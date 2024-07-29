"use client";
import { useState } from "react";
import { useGlobalContext } from "@/context/context";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const MilageToFrom = () => {
  const { allStates, setAllStates } = useGlobalContext();
  const searchParams = Object.fromEntries(useSearchParams());
  const router = useRouter();
  const [mMin, setMMin] = useState(allStates.milageMin || 1);
  const [mMax, setMMax] = useState(allStates.milageMax || 1000000);
  const handleState = ({ itemMin, itemMax }) => {
    if (itemMin && itemMax) {
      setAllStates((prev) => ({
        ...prev,
        refreshSearchText: Math.random(),
        milageMin: itemMin,
        milageMax: itemMax,
      }));
      // setRefreshSearchText(Math.random());
      searchParams[`milageMin`] = itemMin;
      searchParams[`milageMax`] = itemMax;
      delete searchParams.page;
      const queryString = new URLSearchParams(searchParams);
      router.push(`/search?${queryString.toString()}`, {
        scroll: false,
      });
      return;
    } else if (itemMin) {
      if (itemMin < 0 || itemMin > mMax) {
        return;
      }
      setAllStates((prev) => ({
        ...prev,
        refreshSearchText: Math.random(),
        milageMin: itemMin,
      }));
      // setRefreshSearchText(Math.random());
      searchParams[`milageMin`] = itemMin;
      delete searchParams.page;
      const queryString = new URLSearchParams(searchParams);
      router.push(`/search?${queryString.toString()}`, {
        scroll: false,
      });
      return;
    } else if (itemMax) {
      if (itemMax > 1000000 || itemMax < mMin) {
        return;
      }
      setAllStates((prev) => ({
        ...prev,
        refreshSearchText: Math.random(),
        milageMax: itemMax,
      }));
      // setRefreshSearchText(Math.random());
      searchParams[`milageMax`] = itemMax;
      delete searchParams.page;
      const queryString = new URLSearchParams(searchParams);
      router.push(`/search?${queryString.toString()}`, {
        scroll: false,
      });
      return;
    }
  };
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
            className="border-2 rounded-md px-4 dark:bg-[#1e232a] py-2 border-teal-600 outline-none"
            min={1}
            max={mMax}
            onBlur={(e) => {
              if (parseInt(e.target.value) < 0 || e.target.value.length === 0) {
                setMMin(0);
                handleState({ itemMin: 0 });
                return;
              }
              if (parseInt(e.target.value) > mMax) {
                setMMin(mMax);

                setMMax(
                  parseInt(e.target.value) > 1000000
                    ? 1000000
                    : parseInt(e.target.value)
                );
                handleState({
                  itemMin: mMax,
                  itemMax:
                    parseInt(e.target.value) > 1000000
                      ? 1000000
                      : parseInt(e.target.value),
                });
                return;
              }
              setMMin(parseInt(e.target.value));
              handleState({ itemMin: parseInt(e.target.value) });
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setMMin(" ");
                return;
              }
              setMMin(parseInt(e.target.value));
              handleState({ itemMin: parseInt(e.target.value) });
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
            className="border-2 rounded-md dark:bg-[#1e232a] px-4 py-2 border-teal-600 outline-none"
            min={mMin}
            max={1000000}
            onBlur={(e) => {
              if (parseInt(e.target.value) > 1000000) {
                setMMax(
                  parseInt(e.target.value) >= 1000000
                    ? 1000000
                    : parseInt(e.target.value)
                );
                handleState({
                  itemMax:
                    parseInt(e.target.value) >= 1000000
                      ? 1000000
                      : parseInt(e.target.value),
                });
                return;
              }
              if (parseInt(e.target.value) < 0) {
                if (parseInt(e.target.value) < mMin) {
                  setMMax(mMin);
                  handleState({
                    itemMax: mMin,
                  });
                  return;
                }
                setMMax(0);
                handleState({
                  itemMax: 0,
                });
                return;
              }
              if (parseInt(e.target.value) < mMin) {
                setMMax(parseInt(mMin));
                setMMin(parseInt(e.target.value));
                handleState({
                  itemMax: parseInt(mMin),
                  itemMin: parseInt(e.target.value),
                });
                return;
              }
              if (e.target.value.length === 0) {
                setMMax(parseInt(mMin));
                handleState({
                  itemMax: parseInt(mMin),
                });
                return;
              }
              setMMax(parseInt(e.target.value));
              handleState({
                itemMax: parseInt(e.target.value),
              });
            }}
            onChange={(e) => {
              if (e.target.value === "") {
                setMMax(" ");
                return;
              }
              setMMax(parseInt(e.target.value));
              handleState({
                itemMax: parseInt(e.target.value),
              });
            }}
            value={mMax}
          />
        </div>
      </div>
    </div>
  );
};

export default MilageToFrom;
