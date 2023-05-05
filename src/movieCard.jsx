import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div className=" divide-rose-100">
      <div className="rounded">
        <img
          className="object-cover w-full mx-auto rounded-lg p-1 "
          src={movie.Poster ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />

        <div className="py-3 px-3 bg-zinc-100 rounded-lg shadow-lg">
          <p className="text-green-800 font-bold text-lg capitalize m-2  ">
            {movie.Title}
          </p>
          <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 m-2">
            {movie.Year}
          </span>
          <span className=" inline-block bg-gray-200 rounded-full px-3 py-1 font-bold text-gray-700 m-2">
            {movie.Type}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Moviecard;
