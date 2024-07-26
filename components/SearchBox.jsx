"use client";
import { useGlobalContext } from "@/context/context";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
const SearchBox = ({ place, children }) => {
  const { searchText, setSearchText, brand, type, color, transmission } =
    useGlobalContext();
  const [search, setSearch] = useState(searchText || "");
  useEffect(() => {
    setSearchText(search);
  }, [brand, type, color, transmission]);
  const router = useRouter();
  if ((place = "Header")) {
    return (
      <div className="flex flex-col gap-y-2">
        <input
          type="search"
          name="text"
          id="text"
          className=" border-2 rounded-md p-2 w-full"
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const queryString = new URLSearchParams({
                searchText: search,
                brand: brand,
              }).toString();
              router.push(`/search?${queryString}`);

              setSearchText(search);
            }
          }}
          defaultValue={searchText}
        />
        {children}
        <button
          className=" bg-black text-white px-4 py-2 rounded-md"
          onClick={() => {
            const queryString = new URLSearchParams({
              searchText: search,
              brand: brand,
            }).toString();
            router.push(`/search?${queryString}`);

            setSearchText(search);
          }}
        >
          Search
        </button>
      </div>
    );
  }
  return (
    <div className="flex gap-x-2">
      <input
        type="search"
        name="text"
        id="text"
        className=" border-2 rounded-md p-2 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className=" bg-black text-white px-4 py-2 rounded-md"
        onClick={() => setSearchText(search)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
