import { useGlobalContext } from "@/context/context";
import { useState } from "react";
const SearchBox = ({ place, children }) => {
  const [search, setSearch] = useState("");
  const { setSearchText } = useGlobalContext();
  if ((place = "Header")) {
    return (
      <div className="flex flex-col gap-y-2">
        <input
          type="search"
          name="text"
          id="text"
          className=" border-2 rounded-md p-2 w-full"
          onChange={(e) => setSearch(e.target.value)}
        />
        {children}
        <button
          className=" bg-black text-white px-4 py-2 rounded-md"
          onClick={() => setSearchText(search)}
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
