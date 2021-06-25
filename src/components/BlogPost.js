import { Box, Heading, Markdown } from "grommet";

function BlogPost(props) {
  return (
    <div style={{ padding: "6px" }}>
      <Box
        fill="true"
        pad="medium"
        background="#ffffff"
        style={{ outline: "1px solid lightgrey" }}
      >
        <Heading level={4} margin={{ top: "none", bottom: "small" }}>
          Heading
        </Heading>
        <Markdown>Body</Markdown>
      </Box>
    </div>
  );
}

export default BlogPost;
