import React from "react";
import { useEffect, useState } from "react";
import "./index.css";
import Moviecard from "./movieCard";
import SearchIcon from "./search.svg";
//api url
const url = `http://www.omdbapi.com/?apikey=192c82c3`;

// calling Api async function

const App = () => {
  const [movies, setmovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
    console.log(data);
  };
  // useEffect hook for calling api
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <>
      <div className="py-5">
        <h1 className="text-2xl w-full mx-auto text-center font-bold md:text-3xl lg:text-4xl font-serif text-yellow-700">
          MovieStudio
        </h1>
      </div>
      <div className="py-5">
        <div className="flex justify-center py-8">
          <input
            className=" border border-green-800 rounded-full w-1/2  py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-700 text-md shadow-lg"
            placeholder="Search for movies"
            value="superman"
            onChange={() => {}}
          />
          <img
            className="w-10 h-10"
            src={SearchIcon}
            alt="search icon"
            onCanPlay={() => {}}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="grid grid-cols-1 gap-10 mx-auto max-w-4xl md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8">
            {movies.map((movie) => (
              <Moviecard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="">No movies found </div>
        )}
      </div>
    </>
  );
};

export default App;
