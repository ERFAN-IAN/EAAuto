"use client";
import { useGlobalContext } from "@/context/context";
const MobileNav = () => {
  const { moreFiltersModal, setMoreFiltersModal } = useGlobalContext();
  return (
    <div className="md:hidden py-2 px-4">
      <button
        onClick={() => {
          setMoreFiltersModal(true);
          document.body.style.overflow = "hidden";
        }}
        className=" bg-black text-white px-4 py-2 rounded-3xl font-semibold"
      >
        More Filters
      </button>
    </div>
  );
};

export default MobileNav;
