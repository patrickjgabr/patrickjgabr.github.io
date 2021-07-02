import { Box, Heading } from "grommet";
import Project from "./Project";
import Slider from "react-slick";
import { useState, useEfffect } from "react";
const fetch = require("node-fetch");

function Projects(props) {
  const [projects, setProjects] = useState("loading");

  const getProjects = () => {
    fetch(
      "https://youfourdev.netlify.app/.netlify/functions/getDatabase?q=projects"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  var settings = {
    arrows: false,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    draggable: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          draggable: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <Box
      pad={{ bottom: "35px", top: "medium", left: "medium", right: "medium" }}
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <Heading level={3} margin={{ top: "none", bottom: "medium" }}>
        Projects
      </Heading>
      <Box pad={{ bottom: "medium" }}>
        <Slider {...settings}>{getProjects}</Slider>
      </Box>
    </Box>
  );
}

export default Projects;
