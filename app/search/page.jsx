"use client";
import MobileNav from "@/components/MobileNav";
import SearchBox from "@/components/SearchBox";
import SideFilters from "@/components/SideFilters";
import SearchResult from "@/components/SearchResult";
const page = () => {
  return (
    <div className=" mt-[5rem] md:mt-[3rem]">
      <MobileNav />
      <SearchBox />
      <div className="grid grid-cols-12">
        <div className=" col-span-4">
          <SideFilters />
        </div>
        <div className=" col-span-8">
          <SearchResult />
        </div>
      </div>
    </div>
  );
};

export default page;
