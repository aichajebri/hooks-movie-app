import "./App.css";
import React from "react";
import MovieInfo from "./components/MovieInfo";
import MovieList from "./components/MovieList";
import NavigationBar from "./components/NavigationBar.js";

function App() {
  const [moviename, setmoviename] = React.useState(MovieInfo);
  const [titlesearch, settitlesearch] = React.useState("");
  const [ratingsearch, setratingsearch] = React.useState(0);

  return (
    <div className="App">
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
  );
}

export default App;
