import React from "react";
import { useEffect } from "react";
// import searchIcon from "./search.svg";
//api url
const url = `http://www.omdbapi.com/?apikey=192c82c3`;

// calling Api async function
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
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default App;
