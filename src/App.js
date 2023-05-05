import React from "react";
import { useEffect } from "react";
//Here is your key: 192c82c3
// const url = `https://www.omdbapi.com?apikey=192c82c3`;
const url = `http://www.omdbapi.com/?apikey=192c82c3`;

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
};

export default App;
