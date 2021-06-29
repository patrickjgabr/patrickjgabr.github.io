import { Box, Heading } from "grommet";
import Project from "./Project";
import Slider from "react-slick";

function Projects(props) {
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
        <Slider {...settings}>
          <Project title="Project 1" />
          <Project title="Project 2" />
          <Project title="Project 3" />
          <Project title="Project 4" />
        </Slider>
      </Box>
    </Box>
  );
}

export default Projects;
