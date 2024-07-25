import React from "react";
import { categories } from "@/data";
import Image from "next/image";
const Category = ({ handleFunc, category, place }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <p className="font-semibold text-sm">Category</p>
      <div
        className={`grid grid-cols-3 ${
          place === "form" && `sm:grid-cols-5`
        } gap-x-4 gap-y-4 items-end`}
      >
        {categories.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-center cursor-pointer   ${
                place === "form" ? `gap-y-2` : `gap-y-2`
              } ${category === item.title && `opacity-60`}`}
            >
              <label
                htmlFor={item.title}
                className="cursor-pointer gap-y-2 flex flex-col"
                onClick={() => {
                  handleFunc(item.title);
                }}
              >
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt=""
                  className={`w-full object-cover cursor-pointer`}
                />
                <p className="text-center font-semibold text-sm">
                  {item.title}
                </p>
              </label>

              <input
                type="radio"
                name="category"
                id={item.title}
                onChange={() => null}
                checked={item.title === category}
                className="w-0 h-0"
                value={item.title}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
