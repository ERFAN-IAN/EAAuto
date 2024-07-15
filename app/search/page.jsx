"use client";
import MobileNav from "@/components/MobileNav";
import SearchBox from "@/components/SearchBox";
const page = () => {
  return (
    <div className=" mt-[5rem] md:mt-[3rem]">
      <MobileNav />
      <SearchBox />
    </div>
  );
};

export default page;
