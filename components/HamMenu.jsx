import { useGlobalContext } from "@/context/context";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineSell } from "react-icons/md";
const HamMenu = () => {
  const { hamMenu, setHamMenu } = useGlobalContext();
  return (
    <div
      className={`fixed top-[4.25rem] left-[-20rem] md:hidden w-[20rem] h-full transition-transform ease-in-out duration-300 bg-white z-20 ${
        hamMenu ? " translate-x-[20rem]" : " translate-x-[0rem]"
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <ul
        className=" font-semibold flex flex-col py-4 gap-y-6"
        onClick={() => setHamMenu(false)}
      >
        <li>
          <Link
            href={"/"}
            className="flex gap-x-4 items-center text-2xl border-b-2 pb-4 pl-4"
          >
            <span className="mt-1">
              <VscAccount />
            </span>
            My Account
          </Link>
        </li>
        <li>
          <Link
            href={"/search"}
            className="flex gap-x-4 items-center text-2xl border-b-2 pb-4 pl-4"
          >
            <span className="mt-1">
              <IoIosSearch />
            </span>
            Search
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-x-4 items-center text-2xl border-b-2 pb-4 pl-4"
          >
            <span className="mt-1">
              <FaRegBookmark />
            </span>
            Bookmarks
          </Link>
        </li>
        <li>
          <Link
            href={"/"}
            className="flex gap-x-4 items-center text-2xl border-b-2 pb-4 pl-4"
          >
            <span className="mt-1">
              <MdOutlineSell />
            </span>
            Sell
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HamMenu;
