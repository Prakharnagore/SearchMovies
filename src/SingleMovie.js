import React from "react";
import { useParams, Link } from "react-router-dom";

import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();

  const { isLoading, data: movie, error } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    );
  }

  const { Poster: poster, Plot: plot, Title: title, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h4>{title}</h4>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back To Movies
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
