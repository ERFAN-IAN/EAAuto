"use client";
import { useGlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaSortAmountDownAlt } from "react-icons/fa";
const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const objectSearchParams = Object.fromEntries(searchParams);
  const { sortOpen, setSortOpen, setIsModalBackgroundOpen } =
    useGlobalContext();

  return (
    <div className="flex flex-col items-end p-4 w-full relative">
      <div
        onClick={() => {
          setSortOpen(!sortOpen);
        }}
        className={`cursor-pointer`}
      >
        <FaSortAmountDownAlt />
      </div>
      <div className="absolute z-[52] mt-2 top-[80%] ">
        <div
          className={`${
            sortOpen ? `flex flex-col` : `hidden`
          } bg-white p-4 shadow-xl rounded-xl items-start gap-y-2 font-semibold  border-2 w-full h-full`}
        >
          <button
            onClick={() => {
              objectSearchParams.sort = "ascending";
              const queryString = new URLSearchParams(
                objectSearchParams
              ).toString();
              router.push(`/search?${queryString}`);
              setSortOpen(false);
            }}
            className={`${
              objectSearchParams.sort === "ascending" ||
              !objectSearchParams.sort
                ? `bg-slate-300`
                : ``
            } p-2 w-full rounded-md text-left`}
          >
            Date ascending
          </button>
          <button
            onClick={() => {
              objectSearchParams.sort = "descending";
              const queryString = new URLSearchParams(
                objectSearchParams
              ).toString();
              router.push(`/search?${queryString}`);
              setSortOpen(false);
            }}
            className={`${
              objectSearchParams.sort === "descending" ? `bg-slate-300` : ``
            }  p-2 w-full rounded-md text-left`}
          >
            Date descending
          </button>
          <button
            onClick={() => {
              objectSearchParams.sort = "pascending";
              const queryString = new URLSearchParams(
                objectSearchParams
              ).toString();
              router.push(`/search?${queryString}`);
              setSortOpen(false);
            }}
            className={`${
              objectSearchParams.sort === "pascending" ? `bg-slate-300` : ``
            }  p-2 w-full rounded-md text-left`}
          >
            Price ascending
          </button>
          <button
            onClick={() => {
              objectSearchParams.sort = "pdescending";
              const queryString = new URLSearchParams(
                objectSearchParams
              ).toString();
              router.push(`/search?${queryString}`);
              setSortOpen(false);
            }}
            className={`${
              objectSearchParams.sort === "pdescending" ? `bg-slate-300` : ``
            }  p-2 w-full rounded-md text-left`}
          >
            Price descending
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sort;
