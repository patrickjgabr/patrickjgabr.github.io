import { useEffect, useState } from "react";
import { Box, Heading, Markdown } from "grommet";

function Home(props) {
  const [post, setPost] = useState("");

  useEffect(() => {
    import("../about.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large", top: "48px" }}
    >
      <Markdown>{post}</Markdown>
    </Box>
  );
}

export default Home;
