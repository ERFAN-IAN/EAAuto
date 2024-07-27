import { formatPrice } from "@/utils/generalFunctions";
import Link from "next/link";
const carDetails = ({ car }) => {
  // const {
  //   title,
  //   type,
  //   brand,
  //   year,
  //   milage,
  //   category,
  //   color,
  //   transmission,
  //   price,
  //   description,
  //   city,
  //   images,
  //   is_featured,
  //   is_published,
  // } = car;
  if (!car) {
    return (
      <div>
        <div className="bg-white dark:bg-slate-300 w-full rounded-xl mt-4">
          <div className="bg-slate-200 animate-pulse rounded-xl shadow-lg w-full relative flex flex-col gap-y-10 px-4 py-8">
            <div className="text-2xl font-semibold flex gap-x-2  w-full  rounded-xl ">
              <p className="w-[5rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
              <h1 className="w-[7rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></h1>
              <p className="w-[4rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
            </div>
            <div className="flex gap-x-4 animate-pulse">
              <p className="w-[7rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
              <p className="w-[5rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
            </div>
            <div className="flex gap-x-2 animate-pulse">
              <p className="w-[4rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
              <p className="w-[3rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
              <p className="w-[3rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
              <p className="w-[2rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 py-6 px-4 bg-slate-200 rounded-xl mt-4 animate-pulse">
          <p className="w-[7rem] h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
          <p className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
          <p className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
          <p className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="p-4 bg-slate-100 rounded-xl mt-4 flex flex-col gap-y-4">
        <div className="text-2xl font-semibold flex gap-x-2">
          <p>{car?.brand}</p>
          <h1 className="">{car?.title}</h1>
          <p>{car?.year}</p>
        </div>

        <div className="flex items-center">
          <p className="text-red-600 font-bold text-xl md:text-2xl pr-2 border-r-2">
            {formatPrice(car?.price)}
          </p>
          <p className="text-lg md:text-xl pl-2">{`${car?.milage || 0} km`}</p>
        </div>
        <div className="flex gap-x-2">
          <Link
            href={`/search?transmission=${car?.transmission}`}
            className="px-2 py-2 bg-slate-500 hover:bg-slate-600 transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.transmission}
          </Link>
          <Link
            href={`/search?color=${car?.color}`}
            className="px-2 py-2 bg-slate-500 hover:bg-slate-600 transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.color}
          </Link>
          <Link
            href={`/search?category=${car?.category}`}
            className="px-2 py-2 bg-slate-500 hover:bg-slate-600 transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.category}
          </Link>
          <p className="px-2 py-2 bg-slate-500 hover:bg-slate-600 transition-colors duration-150 cursor-pointer rounded-full text-white text-sm">
            {car?.city}
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-slate-100 rounded-xl">
        <p className=" font-semibold text-xl">Seller's description</p>
        <p>{car?.description}</p>
      </div>
    </section>
  );
};

export default carDetails;
