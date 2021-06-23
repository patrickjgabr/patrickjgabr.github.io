import { Grommet, Box, Button, Heading, Markdown, Footer, Text } from "grommet";
import ContentBox from "./components/ContentBox";
import { DocumentPdf, Github, Linkedin, Mail, Resume } from "grommet-icons";
import "./App.css";

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
  button: {
    padding: {
      horizontal: "10px",
    },
    border: {
      radius: "0px",
    },
  },
};

function App() {
  return (
    <Grommet theme={theme} id="page-container">
      <div id="content-wrap">
        <Box
          background="#282a36"
          height="300px"
          elevation="medium"
          style={{ position: "relative" }}
          justify="center"
        >
          <Heading
            margin={{ bottom: "xsmall", top: "none", horizontal: "xlarge" }}
          >
            Patrick Gabriel
          </Heading>
          <Heading
            level={2}
            margin={{ vertical: "none", horizontal: "xlarge" }}
            color="#50fa7b"
          >
            Aspiring Software Engineer from Brisbane, Australia.
          </Heading>

          <Box
            style={{ position: "absolute", bottom: 0, right: 0 }}
            pad="small"
            direction="row"
            gap="small"
          >
            <Button
              primary
              icon={<Mail />}
              color="#ff5555"
              onClick={() => window.open("mailto:patrickjgabr@gmail.com")}
            />
            <Button primary icon={<Linkedin />} color="#8be9fd" />
            <Button primary icon={<Github />} color="#ffb86c" />
            {/* <Button primary label="Resume" icon={<DocumentPdf />} /> */}
          </Box>
        </Box>
        <Box width={{ min: "300px", max: "1350px" }} margin="auto">
          <Markdown
            style={{
              paddingLeft: "40px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            {
              "**Latest Blog Post:** [1/1/1970 - Work In Progress](https://google.com.au)"
            }
          </Markdown>
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
                Contact
              </Heading>
            }
          />
        </Box>
      </div>
      <Footer
        background="#bd93f9"
        height="50px"
        justify="center"
        id="footer"
        elevation="medium"
      >
        <Text size="14px">&copy; Copyright 2021, youfour Labs</Text>
      </Footer>
    </Grommet>
  );
}

export default App;
