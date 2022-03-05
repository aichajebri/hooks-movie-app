import "./App.css";
import React from "react";
import MovieInfo from "./MovieInfo";
import MovieList from "./MovieList";
import NavigationBar from "./NavigationBar.js";

function Home() {
  const [moviename, setmoviename] = React.useState(MovieInfo);
  const [titlesearch, settitlesearch] = React.useState("");
  const [ratingsearch, setratingsearch] = React.useState(0);

  return (
    <div className="App">
      <div>
        <NavigationBar
          titlesearch={titlesearch}
          ratingsearch={ratingsearch}
          moviename={moviename}
          setmoviename={setmoviename}
          settitlesearch={settitlesearch}
          setratingsearch={setratingsearch}
        />
        <MovieList
          moviename={moviename}
          titlesearch={titlesearch}
          ratingsearch={ratingsearch}
        />
      </div>
    </div>
  );
}

export default Home;
