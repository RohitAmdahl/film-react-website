import React from "react";
import { useEffect } from "react";
import "./index.css";
import SearchIcon from "./search.svg";
//api url
const url = `http://www.omdbapi.com/?apikey=192c82c3`;

// calling Api async function

const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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
      </div>
      {/* movie card */}

      <div className="bg-gray-100 w-1/2 rounded-2xl">
        <img
          className="object-cover object-top w-full rounded-lg"
          src={
            movie1.Poster ? movie1.Poster : "https://via.placeholder.com/400"
          }
          alt={movie1.Title}
        />
        <h1 className="text-green-800 font-bold text-2xl capitalize m-2 ">
          {movie1.Title}
        </h1>
        <div className="py-3 px-3">
          <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 m-2">
            {movie1.Year}
          </span>
          <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 m-2">
            {movie1.Type}
          </span>
        </div>
      </div>
    </>
  );
};

export default App;
