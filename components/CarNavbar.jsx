"use client";
import { FaShareAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const CarNavbar = () => {
  const carsPage = usePathname().startsWith("/cars");
  const router = useRouter();
  return (
    <nav
      className={`${
        !carsPage ? `hidden` : `flex`
      } sticky top-0 z-[21] light:bg-white dark:bg-[#292F38] dark:shadow-2xl items-center py-4 pr-8 pl-5 justify-between w-full max-w-[61.25rem] md:top-[1rem] md:rounded-lg md:shadow-md`}
    >
      <div className="flex items-center gap-x-4">
        <FaChevronLeft
          className=" cursor-pointer"
          onClick={() => router.back()}
        />
        <Link href={"/"} className="text-3xl">
          <span className=" font-bold text-black dark:text-white">EA </span>
          <span className="font-bold text-teal-600">Auto</span>
        </Link>
      </div>

      <div className="flex gap-x-4 text-xl">
        <FaRegBookmark />
        <FaBookmark />
        <div
          onClick={async () => {
            if (navigator.share) {
              await navigator.share({
                url: window.location.href,
              });
            }
            return;
          }}
          className=" cursor-pointer"
        >
          <FaShareAlt />
        </div>
      </div>
    </nav>
  );
};

export default CarNavbar;
