"use client";

// Fix the problem for "search params object is empty in production with next 13 app dir"

// for more info "https://github.com/vercel/next.js/issues/43077"

export const dynamic = "force-dynamic"; // this is the fix
import { useEffect, useState } from "react";
import Results from "../components/Results";

// here add async in component we going to fetch data but have error
// remove async to fix the “Objects are not valid as a React child” error
// export default async function Home({ searchParams }) {
export default function Home({ searchParams }) {
  const API_KEY = process.env.API_KEY;
  const genre = searchParams.genre || "fetchTrending";
  // can go to next.js to search fetch function have other method and other key { next: { revalidate: 10000 } }
  // const res =  fetch(
  //   `https://api.themoviedb.org/3/${
  //     genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  //   }?api_key=${API_KEY}&language=en-US&page=1`,
  //   { next: { revalidate: 10000 } }
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  // }

  // const data = await res.json();

  // const results = data.results;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  if (error) {
    throw error;
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
        }?api_key=061a048a192b752faa0042d33e529e70&language=en-US&page=1`,
        { next: { revalidate: 10000 } }
      );
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to fetch data");
    };
    fetchData()
      .then((data) => {
        setData(data.results);
      })
      .catch((err) => setError(err));
  }, [genre]);

  console.log("data in Home", data);
  return (
    <div>
      <Results data={data} />
    </div>
  );
}
