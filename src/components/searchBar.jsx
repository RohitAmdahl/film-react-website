import React from "react";
import SearchIcon from "../search.svg";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center gap-3 py-8">
      <input
        className=" border border-green-800 rounded-full w-1/2  py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 text-md shadow-lg"
        placeholder="Search for movies"
        value="superman"
        onChange={() => {}}
      />
      <img
        className="w-10 h-10 shadow-2xl"
        src={SearchIcon}
        alt="search icon"
        onchange={() => {}}
      />
    </div>
  );
};

export default SearchBar;
