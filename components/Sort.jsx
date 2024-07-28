"use client";
import { useGlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { FaSortAmountDownAlt } from "react-icons/fa";
const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const objectSearchParams = Object.fromEntries(searchParams);
  const { sortOpen, setSortOpen, setIsModalBackgroundOpen, sort, setSort } =
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
          } bg-white dark:bg-[#1e232a] dark:border-teal-600 p-4 shadow-xl rounded-xl items-start gap-y-2 font-semibold  border-2 w-full h-full`}
        >
          <button
            onClick={() => {
              setSort("ascending");
              setSortOpen(false);
            }}
            className={`${
              sort === "ascending" ? `bg-slate-300 dark:bg-[#343C47]` : ``
            } p-2 w-full rounded-md text-left`}
          >
            Date ascending
          </button>
          <button
            onClick={() => {
              setSort("descending");
              setSortOpen(false);
            }}
            className={`${
              sort === "descending" ? `bg-slate-300 dark:bg-[#343C47]` : ``
            }  p-2 w-full rounded-md text-left`}
          >
            Date descending
          </button>
          <button
            onClick={() => {
              setSort("pascending");
              setSortOpen(false);
            }}
            className={`${
              sort === "pascending" ? `bg-slate-300 dark:bg-[#343C47]` : ``
            }  p-2 w-full rounded-md text-left`}
          >
            Price ascending
          </button>
          <button
            onClick={() => {
              setSort("pdescending");
              setSortOpen(false);
            }}
            className={`${
              sort === "pdescending" ? `bg-slate-300 dark:bg-[#343C47]` : ``
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
