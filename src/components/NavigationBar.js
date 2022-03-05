import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./AddMovie.js";
import appLogo from "./Studio_Ghibli_wordmark.svg.png";
import "./components.css";
import ReactStars from "react-rating-stars-component";

export default function NavigationBar({
  moviename,
  titlesearch,
  setmoviename,
  settitlesearch,
  setratingsearch,
  ratingsearch,
}) {
  const handleChange = (event) => settitlesearch(event.target.value);
  const ratingChanged = (s) => {
    setratingsearch(s);
  };
  return (
    <Navbar className="navbar navbar-dark bg-primary">
      <img src={appLogo} alt="gibli studios" width="200px" />
      {/* <Navbar.brand href="">Ghibli Studios - Miyazaki World</Navbar.brand> */}
      <nav
        className="nav nav-pills flex-column"
        style={{
          maxHeight: "50px",
          fontSize: "20px",
          fontweight: "bolder",
          marginRight: "50px",
          color: "white",
        }}
      >
        Miyazaki's World
      </nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder=" Movie Title"
          className="mr-2"
          aria-label="Search"
          onChange={handleChange}
          style={{ width: "200px" }}
          value={titlesearch}
        />
      </Form>
      <div
        className="rating-by-stars"
        style={{
          marginLeft: "50px",
          width: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <span>
          <i>Search by rating</i>
        </span>

        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={20}
          isHalf={false}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#B0E0E6"
          value={ratingsearch}
        />
      </div>
      <AddMovie setmoviename={setmoviename} moviename={moviename} />
    </Navbar>
  );
}
