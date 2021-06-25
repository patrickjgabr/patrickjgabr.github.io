import { Box, Grid, Heading, Image, Pagination } from "grommet";
import Slider from "react-slick";
import BlogPost from "./BlogPost";

function Blog(props) {
  var settings = {
    arrows: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
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
      fill="true"
      pad={{ bottom: "35px", top: "medium", left: "medium", right: "medium" }}
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <Heading level={3} margin={{ top: "none", bottom: "medium" }}>
        Blog
      </Heading>

      <Box pad={{ horizontal: "medium", bottom: "medium" }}>
        <Slider {...settings}>
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </Slider>
      </Box>
    </Box>
  );
}

export default Blog;
