import { Box, Grid, Heading, Image, Pagination, Text } from "grommet";
import Slider from "react-slick";
import BlogPost from "./BlogPost";

import { useState, useEffect } from "react";

function Blog(props) {
  const [blogPosts, setBlogPosts] = useState("loading");

  const renderBlogPosts = () => {
    return blogPosts.map((blogPost, key) => (
      <BlogPost post={blogPost} key={key}></BlogPost>
    ));
  };

  const GetBlogPosts = () => {
    fetch("https://youfourdev.netlify.app/.netlify/functions/getBlog")
      .then((res) => res.json())
      .then((data) => setBlogPosts(data.results));
  };

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
    ],
  };

  useEffect(() => {
    GetBlogPosts();
  }, []);

  return (
    <Box
      pad={{ bottom: "35px", top: "medium", left: "medium", right: "medium" }}
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
      gap="medium"
    >
      <Heading level={3} margin={{ top: "none", bottom: "none" }}>
        Blog
      </Heading>
      <Text>
        Bellow I'll be documenting my journey as an aspiring software engineer.
        Majority of the content will be based around my thoughts and experiences
        throughout my own personal and professional development.
      </Text>
      <Box pad={{ horizontal: "medium", bottom: "medium" }}>
        {blogPosts != "loading" && (
          <Slider {...settings}>{renderBlogPosts()}</Slider>
        )}
      </Box>
    </Box>
  );
}

export default Blog;
