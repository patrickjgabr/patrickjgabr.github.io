import { Box, Heading, Markdown } from "grommet";

function Home(props) {
  return (
    <Box
      fill="true"
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large", top: "48px" }}
    >
      <Markdown>Hello World</Markdown>
    </Box>
  );
}

export default Home;
