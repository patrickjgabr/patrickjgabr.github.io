import { Box, Grid, Heading, Image, Pagination } from "grommet";

function Blog(props) {
  return (
    <Box
      fill="true"
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <Heading level={3} margin={{ top: "none", bottom: "small" }}>
        Blog
      </Heading>

      <Pagination numberItems={1}></Pagination>
    </Box>
  );
}

export default Blog;
