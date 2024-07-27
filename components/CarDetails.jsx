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

  return (
    <section>
      <div className="p-4 bg-teal-600 rounded-xl mt-4 flex flex-col gap-y-4  shadow-lg">
        <div className="text-2xl font-semibold flex gap-x-2 text-white">
          <p>{car?.brand}</p>
          <h1 className="">{car?.title}</h1>
          <p>{car?.year}</p>
        </div>

        <div className="flex items-center text-white">
          <p className=" font-bold text-xl md:text-2xl pr-2 border-r-2">
            {formatPrice(car?.price)}
          </p>
          <p className="text-lg md:text-xl pl-2">{`${car?.milage || 0} km`}</p>
        </div>
        <div className="flex gap-x-2 text-white">
          <Link
            href={`/search?transmission=${car?.transmission}`}
            className="px-2 py-2  transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.transmission}
          </Link>
          <Link
            href={`/search?color=${car?.color}`}
            className="px-2 py-2  transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.color}
          </Link>
          <Link
            href={`/search?category=${car?.category}`}
            className="px-2 py-2  transition-colors duration-150 rounded-full text-white text-sm"
          >
            {car?.category}
          </Link>
          <p className="px-2 py-2  transition-colors duration-150 cursor-pointer rounded-full  text-sm">
            {car?.city}
          </p>
        </div>
      </div>
      <div className="mt-4 p-4 bg-teal-700 text-white rounded-xl shadow-md">
        <p className=" font-semibold text-xl">Seller's description</p>
        <p>{car?.description}</p>
      </div>
    </section>
  );
};

export default carDetails;
