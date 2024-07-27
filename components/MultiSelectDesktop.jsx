"use client";
import { useGlobalContext } from "@/context/context";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
const MultiSelectDesktop = ({
  name,
  data,
  setModal,
  modalState,
  handleFunction,
  arrayResult,
  headerpage,
}) => {
  const { isModalBackgroundOpen, setIsModalBackgroundOpen } =
    useGlobalContext();
  const [search, setSearch] = useState("");
  const [outline, setOutline] = useState(false);

  return (
    <div
      className={`${
        modalState
          ? "absolute bg-white    md:flex flex-col justify-between z-50"
          : " w-full h-full bg-white left-0 top-0  z-10"
      } hidden rounded-xl shadow-xl border-2 ${
        headerpage
          ? ` top-100 left-0 right-0`
          : `right-0 translate-x-[103%] top-0 w-[20rem]`
      }`}
    >
      <div className="flex flex-col p-6  max-h-60 overflow-y-scroll">
        <div className="">
          <div
            className={`flex border-2 ${
              outline && `border-black`
            } mb-2 rounded-lg items-center py-2 pl-2`}
          >
            <div className=" font-bold text-xl">
              <IoSearchOutline />
            </div>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-2 pr-4  outline-none text-lg"
              onFocus={() => setOutline(true)}
              onBlur={() => setOutline(false)}
            />
          </div>

          {/* <div className="flex justify-between ">
            <label
              htmlFor="All"
              className="font-bold text-md w-full cursor-pointer"
            >
              All
            </label>
            <input
              type="checkbox"
              id="All"
              name={name}
              value="All"
              className="mr-2 font-semibold text-sm"
              checked={arrayResult.includes("All")}
              onChange={() => {
                if (arrayResult === "All") {
                  return;
                }
                handleFunction("All");
              }}
            />
          </div> */}
        </div>
        {data
          .filter((item) => {
            if (search.toLocaleLowerCase() === "") {
              return item;
            } else if (
              item.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase())
            ) {
              return item;
            }
            return;
          })
          .map((item, index) => {
            return (
              <div
                className=" border-b-2 cursor-pointer"
                key={index}
                // onClick={() => {
                //   setModal(false);
                //   setIsModalBackgroundOpen(false);
                // }}
              >
                <div className="flex justify-between">
                  <label
                    htmlFor={item.title}
                    className="w-full py-4 cursor-pointer"
                  >
                    {item.title}
                  </label>
                  <input
                    type="checkbox"
                    id={item.title}
                    name={name}
                    value={item.title}
                    className="mr-2 cursor-pointer"
                    onChange={() => {
                      handleFunction(item.title);
                    }}
                    checked={arrayResult.includes(item.title)}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="p-4">
        <div className=" justify-end flex gap-x-2 text-sm font-semibold">
          <button
            type="button"
            className=" bg-black text-white px-4 py-2 rounded-md"
            onClick={() => {
              setModal(false);
              document.body.style.overflow = "visible";
              setIsModalBackgroundOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectDesktop;
