"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "@/context/context";
import { usePathname } from "next/navigation";
import Link from "next/link";
const Navbar = () => {
  const {
    setHamMenu,
    hamMenu,
    setRefreshYear,
    setColor,
    setBrand,
    setType,
    setTransmission,
    setYearMin,
    setYearMax,
    setSearchText,
    refreshSearchText,
    setRefreshSearchText,
    setRefreshMilage,
    milageMin,
    setMilageMin,
    milageMax,
    setMilageMax,
    category,
    handlecategory,
  } = useGlobalContext();
  const carsPage = usePathname().startsWith("/cars");
  return (
    <nav
      className={`${
        carsPage ? `hidden` : `flex`
      } md:max-w-[98%]  lg:max-w-[61.25rem]  z-30 py-4  px-4 bg-white justify-between items-center sticky top-0 md:relative w-full md:top-[1rem] md:rounded-lg md:shadow-md `}
    >
      <div className="flex gap-x-2 text-3xl items-center   self-center">
        <div
          className=" cursor-pointer md:hidden"
          onClick={() => {
            setHamMenu(!hamMenu);
            if (!hamMenu) {
              document.body.style.overflow = "hidden";
            } else {
              document.body.style.overflow = "visible";
            }
          }}
        >
          <AiOutlineMenu />
        </div>

        <Link href={"/"} className="">
          <span className=" font-bold text-black">EA </span>
          <span className="font-bold text-red-600">Auto</span>
        </Link>
        <div className="hidden md:flex ml-20 gap-x-4 items-center">
          <Link
            href="/search"
            className=" text-lg font-semibold  rounded-lg px-4 py-2 bg-slate-50 hover:bg-slate-100"
            onClick={() => {
              setBrand(["All"]);
              setType("All");
              setColor(["All"]);
              setTransmission("All");
              setSearchText("");
              setRefreshSearchText(Math.random()),
                setYearMax(new Date().getFullYear());
              setYearMin(1920);
              setRefreshYear(Math.random());
              setMilageMin(0),
                setMilageMax(1000000),
                setRefreshMilage(Math.random());
              handlecategory("All");
            }}
          >
            Search
          </Link>
          <Link
            href="/"
            className=" text-lg font-semibold  rounded-lg px-4 py-2 bg-slate-50 hover:bg-slate-100"
          >
            Bookmarks
          </Link>
        </div>
      </div>

      <div className="flex gap-x-2">
        <button className=" px-3 rounded-3xl border-2 border-black font-semibold ">
          <span className=" leading-20">Login</span>
        </button>
        <button className=" px-[1.2rem] rounded-3xl  bg-black font-semibold text-white">
          <span className=" leading-20">Sell</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
