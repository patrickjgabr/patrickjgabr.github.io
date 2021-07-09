import { Box, Heading, Markdown } from "grommet";

function BlogPost(props) {
  return (
    <div style={{ padding: "6px" }}>
      <Box
        pad="medium"
        background="#ffffff"
        style={{ outline: "1px solid lightgrey" }}
        onClick={() => console.log(props.post.id)}
      >
        <Heading level={4} margin={{ top: "none", bottom: "small" }}>
          {props.post.name}
        </Heading>
        <Heading level={6} margin={{ top: "none", bottom: "small" }}>
          {props.post.published}
        </Heading>
        <Markdown>{props.post.summary}</Markdown>
      </Box>
    </div>
  );
}

export default BlogPost;
