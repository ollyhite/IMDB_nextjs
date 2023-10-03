"use client";
import { useEffect, useState } from "react";
import Results from "@/components/Results";

export default function SearchPage({ params }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  if (error) {
    throw error;
  }
  useEffect(() => {
    const fetchData = async (params) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&include_adult=false`
      );
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    };
    fetchData(params)
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => setError(err));
  }, [params]);

  console.log("data in SearchPage", data);
  return (
    <div>
      {data && data.length === 0 && <h1>No results founds</h1>}
      {data && <Results data={data} />}
    </div>
  );
}
