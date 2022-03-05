import React from "react";
import { Link, useParams } from "react-router-dom";
import MovieInfo from "../MovieInfo";
function Description(props) {
  const params = useParams();
  let currentMovie = null;
  const movie = () => {
    currentMovie = MovieInfo.find((movie) => movie.title === params.title);
  };
  movie();
  console.log(currentMovie);
  return (
    <div className="w-100 vh-100 bg-dark">
      <div className="container d-flex flex-column align-items-center ">
        <div
          className=" d-flex flex-column align-items-center bg-light mt-5"
          style={{ width: "590px", padding: "10px 5px", borderRadius: "13px" }}
        >
          <h1 className="mb-3">{currentMovie.title}</h1>
          <iframe
            width="560"
            height="315"
            src={currentMovie.trailer}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p style={{ width: "560px" }} className="mt-3">
            {currentMovie.description}
          </p>
          <Link to="/">
            <button className="btn btn-primary">back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Description;
