"use client";
import { useGlobalContext } from "@/context/context";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
const multiSelect = ({ name, data, modalName }) => {
  const router = useRouter();
  const { allStates, setAllStates } = useGlobalContext();
  const searchParams = Object.fromEntries(useSearchParams());
  const [search, setSearch] = useState("");
  const [outline, setOutline] = useState(false);
  // const checkedValue = name === "brand" ? localBrand : localColor;
  const handleColor = (item) => {
    if (!allStates.color.includes(item)) {
      console.log(1);
      const filterAll = allStates.color.filter((e) => e !== "All");
      console.log("rrr", allStates.color);
      setAllStates((prev) => ({
        ...prev,
        color: [...filterAll, item].toString().split(","),
      }));

      return [...filterAll, item].toString().split(",");
    } else {
      console.log(2);
      let temp = allStates.color.filter((e) => e != item);
      setAllStates((prev) => ({
        ...prev,
        color: temp.length === 0 ? ["All"] : temp,
      }));
      return temp.length === 0 ? ["All"] : temp;
    }
  };
  const handleBrand = (item) => {
    if (!allStates.brand.includes(item)) {
      console.log(1);
      const filterAll = allStates.brand.filter((e) => e !== "All");
      console.log("rrr", allStates.brand);
      setAllStates((prev) => ({
        ...prev,
        brand: [...filterAll, item].toString().split(","),
      }));

      return [...filterAll, item].toString().split(",");
    } else {
      console.log(2);
      let temp = allStates.brand.filter((e) => e != item);
      setAllStates((prev) => ({
        ...prev,
        brand: temp.length === 0 ? ["All"] : temp,
      }));
      return temp.length === 0 ? ["All"] : temp;
    }
  };
  // let checkedValue;
  // if (searchParams?.brand) {
  //   checkedValue = searchParams?.brand.split(",").includes(item.title);
  // } else {
  //   checkedValue = false;
  // }

  const handleFunction = name === "brand" ? handleBrand : handleColor;
  return (
    <div
      className={`${
        allStates[modalName]
          ? "fixed w-full h-full bg-white dark:bg-inherit left-0 top-0  flex flex-col justify-between z-[61]"
          : "hidden w-full h-full bg-white left-0 top-0  z-10"
      }  md:hidden`}
    >
      <div className="flex flex-col gap-y-2 p-6 max-h-[90%] overflow-y-scroll">
        <div className="">
          <div
            className={`flex border-2 ${
              outline && `border-teal-600`
            } mb-2 rounded-lg items-center py-2 pl-2 border-teal-600`}
          >
            <div className=" font-bold text-xl">
              <IoSearchOutline />
            </div>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-2 pr-4  outline-none text-lg dark:bg-transparent"
              onFocus={() => setOutline(true)}
              onBlur={() => setOutline(false)}
            />
          </div>
          {/* <div
            className="flex justify-between "
            onClick={() => (document.body.style.overflow = "visible")}
          >
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
              <div className=" border-b-2 cursor-pointer" key={index}>
                <div
                  className="flex justify-between"
                  // onClick={() => {
                  //   // document.body.style.overflowY = "visible";
                  // }}
                >
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
                      const func = handleFunction(item.title);
                      console.log(func);
                      setAllStates((prev) => ({
                        ...prev,
                        refreshSearchText: Math.random(),
                      }));
                      // setRefreshSearchText(Math.random());
                      searchParams[name] = func;
                      delete searchParams.page;
                      const queryString = new URLSearchParams(searchParams);
                      router.push(`/search?${queryString.toString()}`, {
                        scroll: false,
                      });
                    }}
                    checked={
                      searchParams?.[name]
                        ? searchParams?.[name].split(",").includes(item.title)
                        : false
                    }
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
            className=" bg-teal-700 text-white px-4 py-2 rounded-md"
            onClick={() => {
              setAllStates((prev) => ({
                ...prev,
                [modalName]: false,
                isModalBackgroundOpen: false,
              }));

              // setModal(false);
              document.body.style.overflowY = "visible";
              // setIsModalBackgroundOpen(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default multiSelect;
