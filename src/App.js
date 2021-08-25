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
import { useEffect, useState } from "react";
import ContentBox from "./components/ContentBox";
import { DocumentPdf, Github, Linkedin, Mail, Resume } from "grommet-icons";
import "./App.css";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
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
  const [post, setPost] = useState("");

  useEffect(() => {
    import("./about.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grommet theme={theme} id="page-container">
      <div id="content-wrap">
        <Box
          background="#282a36"
          style={{ position: "relative", minHeight: "600px" }}
        >
          <Box
            style={{
              position: "absolute",
              margin: "auto",
              left: 0,
              right: 0,
              width: "1200px",
              display: "flex",
              justifyContent: "flex-end",
            }}
            pad="small"
            direction="row"
            gap="small"
          >
            <Button
              icon={<Mail color="#ff5555" />}
              onClick={() => window.open("mailto:patrickjgabr@gmail.com")}
            />
            <Button
              icon={
                <Linkedin
                  color="#8be9fd"
                  onClick={() =>
                    window.open("https://www.linkedin.com/in/patrickjgabr/")
                  }
                />
              }
            />
            <Button
              icon={
                <Github
                  color="#ffb86c"
                  onClick={() => window.open("https://github.com/patrickjgabr")}
                />
              }
            />
            {/* <Button primary label="Resume" icon={<DocumentPdf />} /> */}
          </Box>
          <Box
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
            }}
            direction="row-responsive"
            gap="large"
            pad="xlarge"
          >
            <Box>
              <Heading margin={{ bottom: "small", top: "medium" }}>
                Patrick Gabriel
              </Heading>
              <Heading
                level={2}
                color="#50fa7b"
                margin={{ top: "none", bottom: "small" }}
              >
                Aspiring Software Engineer from Brisbane, Australia.
              </Heading>

              <Box width={{ max: "700px" }} margin={{ bottom: "small" }}>
                <Text size="large">{post}</Text>
              </Box>
            </Box>

            <Box width="300px" height="300px">
              <Image
                fit="cover"
                src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
              />
            </Box>
          </Box>
        </Box>
        <Box width={{ min: "300px", max: "1100px" }} margin="auto">
          <Projects />
          {/* <Blog /> */}
          <Skills />
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
