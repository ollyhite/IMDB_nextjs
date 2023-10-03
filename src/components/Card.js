import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ data }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${data.id}`}>
        {/* <Image
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
        ></Image> */}
        <img
          src={`https://image.tmdb.org/t/p/original/${
            data.backdrop_path || data.poster_path
          }`}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          placeholder="blur"
          //   blurdataurl="/spinner.svg"
          alt={`${data.original_title} image is not available`}
        />
        <div className="p-2">
          {/* //truncate -> make one line detail .... */}
          <p className="line-clamp-2 text-md">{data.overview}</p>
          <h2 className="truncate text-lg front-bold">
            {data.title || data.name}
          </h2>
          <div className="flex items-center">
            <p className="mr-3">{data.release_date || data.first_air_date}</p>
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {data.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
}
