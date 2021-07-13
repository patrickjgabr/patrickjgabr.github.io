import {
  Grommet,
  Box,
  Button,
  Heading,
  Markdown,
  Footer,
  Text,
  Image,
} from "grommet";
import ContentBox from "./components/ContentBox";
import { DocumentPdf, Github, Linkedin, Mail, Resume } from "grommet-icons";
import "./App.css";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = {
  global: {
    colors: {
      brand: "#50fa7b",
      "accent-1": "#8be9fd",
      "accent-2": "#7FFFB0",
      "accent-3": "#8FFFB0",
      "accent-4": "#9FFFB0",
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
    <Grommet theme={theme} id="page-container">
      <div id="content-wrap">
        <Box background="#282a36">
          <Box
            height="300px"
            style={{
              position: "relative",
              width: "1920px",
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
            direction="row"
          >
            <Box
              direction="row-responsive"
              gap="medium"
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
              pad={{ horizontal: "xlarge" }}
            >
              <Box width="125px" height="125px">
                <Image
                  fit="cover"
                  src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
                />
              </Box>
              <Box>
                <Heading margin={{ bottom: "xsmall", top: "none" }}>
                  Patrick Gabriel
                </Heading>
                <Heading
                  level={2}
                  margin={{ vertical: "none" }}
                  color="#50fa7b"
                >
                  Aspiring Software Engineer from Brisbane, Australia.
                </Heading>
              </Box>
            </Box>

            <Box
              style={{ position: "absolute", bottom: 0, right: 0 }}
              pad="small"
              direction="row"
              gap="small"
            >
              <Button
                icon={<Mail color="#ff5555" />}
                onClick={() => window.open("mailto:patrickjgabr@gmail.com")}
              />
              <Button icon={<Linkedin color="#8be9fd" />} />
              <Button icon={<Github color="#ffb86c" />} />
              {/* <Button primary label="Resume" icon={<DocumentPdf />} /> */}
            </Box>
          </Box>
        </Box>
        <Box width={{ min: "300px", max: "1100px" }} margin="auto">
          <Home />
          <Projects />
          <Blog />
          <Contact />
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
