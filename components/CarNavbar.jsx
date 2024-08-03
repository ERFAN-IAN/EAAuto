import Link from "next/link";
import CarNavbarBackButton from "./CarNavbarBackButton";
import ThemeSwitch from "./ThemeSwitch";
import Bookmark from "./Bookmark";
import CarNavbarShare from "./CarNavbarShare";
import { bookmarking } from "@/utils/actions";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
const CarNavbar = async () => {
  const session = await getServerSession(authOptions);

  const user = await User.find({ _id: session?.user?.id });
  return (
    <nav
      className={`flex sticky top-0 z-[21] bg-white dark:bg-[#292F38] dark:shadow-2xl items-center py-4 pr-8 pl-5 justify-between w-full max-w-[61.25rem] md:top-[1rem] md:rounded-lg md:shadow-md`}
    >
      <div className="flex items-center gap-x-4">
        <CarNavbarBackButton />
        <Link href={"/"} className="text-3xl">
          <span className=" font-bold text-black dark:text-white">EA </span>
          <span className="font-bold text-teal-600">Auto</span>
        </Link>
      </div>

      <div className="flex gap-x-4 text-xl items-center">
        <Bookmark
          bookmarking={bookmarking}
          bookmark={user[0]?.bookmarks.toString()}
        />
        <CarNavbarShare />
        <div className="h-full w-6">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default CarNavbar;
