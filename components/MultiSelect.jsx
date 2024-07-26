"use client";
import { useGlobalContext } from "@/context/context";
const multiSelect = ({
  name,
  data,
  setModal,
  modalState,
  handleFunction,
  arrayResult,
}) => {
  const { setIsModalBackgroundOpen } = useGlobalContext();

  return (
    <div
      className={`${
        modalState
          ? "fixed w-full h-full bg-white left-0 top-0  flex flex-col justify-between z-[61]"
          : "hidden w-full h-full bg-white left-0 top-0  z-10"
      }  md:hidden`}
    >
      <div className="flex flex-col gap-y-2 p-6">
        <div className="border-b-2 py-4 cursor-pointer">
          <div
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
          </div>
        </div>
        {data.map((item, index) => {
          return (
            <div
              className=" border-b-2 cursor-pointer"
              key={index}
              onClick={() => (document.body.style.overflow = "visible")}
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

export default multiSelect;
