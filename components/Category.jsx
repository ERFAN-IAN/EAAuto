import React from "react";
import { categories } from "@/data";
import Image from "next/image";
const Category = ({ handleFunc, category }) => {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-4 items-end">
      {categories.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-col justify-center cursor-pointer gap-y-2 ${
              category === item.title && `opacity-60`
            }`}
            onClick={() => handleFunc(item.title)}
          >
            <Image
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt=""
              className={`w-full object-cover`}
            />
            <p className="text-center font-semibold text-sm">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
