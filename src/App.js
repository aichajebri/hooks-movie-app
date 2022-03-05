import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Description from "./components/movie description/Description";
function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/:title/description/:id" exact element={<Description />} />
    </Routes>
  );
}

export default App;
