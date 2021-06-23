import { Grommet, Box, Button, Heading, Markdown } from "grommet";
import ContentBox from "./components/ContentBox";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <Box
        pad="xlarge"
        background="#282a36"
        height="300px"
        justify="center"
        elevation="medium"
      >
        <Heading margin={{ bottom: "xsmall", top: "none" }}>
          Patrick Gabriel
        </Heading>
        <Heading level={2} margin={{ vertical: "none" }} color="#50fa7b">
          Aspiring Software Engineer from Brisbane, Australia.
        </Heading>
      </Box>
      <ContentBox content={<Markdown>Hello world.</Markdown>} />
      <ContentBox
        content={
          <Heading level={3} margin="none">
            Blog
          </Heading>
        }
      />
      <ContentBox
        content={
          <Heading level={3} margin="none">
            Projects
          </Heading>
        }
      />
      <ContentBox
        content={
          <Heading level={3} margin="none">
            Resume
          </Heading>
        }
      />
    </Grommet>
  );
}

export default App;
