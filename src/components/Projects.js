import { Box, Heading } from "grommet";

function Projects(props) {
  return (
    <Box
      fill="true"
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <Heading level={3} margin={{ top: "none", bottom: "small" }}>
        Projects
      </Heading>
    </Box>
  );
}

export default Projects;
