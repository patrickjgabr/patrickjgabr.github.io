import { Box, Heading } from "grommet";
import Project from "./Project";

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
      <Project />
    </Box>
  );
}

export default Projects;
