"use client";
import { useEffect, useState } from "react";

export default function MoviePage({ params }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  if (error) {
    throw error;
  }
  useEffect(() => {
    const movieId = params.id;
    console.log("movieId", movieId);
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=061a048a192b752faa0042d33e529e70`
      );
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    };
    fetchData()
      .then((data) => {
        setData(data);
      })
      .catch((err) => setError(err));
  }, []);

  console.log("data in movie", data);
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <img
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="rounded-lg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
          placeholder="blur"
          //   blurDataURL="/spinner.svg"
          alt="Movie poster"
        />
        <div className="p-2 mx-auto md:space-x-6">
          <h2 className="text-lg mb-3 font-bold">
            {data.title || data.original_title || data.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {data.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {data.release_date || data.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
