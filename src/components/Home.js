import { useEffect, useState } from "react";
import { Box, Heading, Markdown, Text, Image } from "grommet";

function Home(props) {
  const [post, setPost] = useState("");

  useEffect(() => {
    import("../about.md")
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large", top: "48px" }}
    >
      <Box direction="row-responsive" gap="large">
        <div>
          <Heading level={5} margin={{ vertical: "small" }}>
            Primary Languages
          </Heading>
          <Box direction="column" gap="xsmall">
            <Box direction="row" gap="small">
              <i class="devicon-javascript-plain colored"></i>
              <Text size="small">JavaScript</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-dart-plain colored"></i>
              <Text size="small">Dart</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-python-plain colored"></i>
              <Text size="small">Python</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-java-plain colored"></i>
              <Text size="small">Java</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-csharp-plain-wordmark colored"></i>
              <Text size="small">C#</Text>
            </Box>
          </Box>
        </div>
        <div>
          <Heading level={5} margin={{ vertical: "small" }}>
            {"Technologies"}
          </Heading>
          <Box direction="column" gap="xsmall">
            <Box direction="row" gap="small">
              <i class="devicon-react-plain colored"></i>
              <Text size="small">React</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-nodejs-plain colored"></i>
              <Text size="small">Node.js</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-express-original colored"></i>
              <Text size="small">Express</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-flutter-plain colored"></i>
              <Text size="small">Flutter</Text>
            </Box>
          </Box>
        </div>

        <div>
          <Heading level={5} margin={{ vertical: "small" }}>
            Tools
          </Heading>
          <Box direction="column" gap="xsmall">
            <Box direction="row" gap="small">
              <i class="devicon-vscode-plain colored"></i>
              <Text size="small">VSCode</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-github-plain colored"></i>
              <Text size="small">Github</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-amazonwebservices-original colored"></i>
              <Text size="small">AWS</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-heroku-plain colored"></i>
              <Text size="small">Heroku</Text>
            </Box>
          </Box>
        </div>
        <div>
          <Heading level={5} margin={{ vertical: "small" }}>
            Databases
          </Heading>
          <Box direction="column" gap="xsmall">
            <Box direction="row" gap="small">
              <i class="devicon-postgresql-plain colored"></i>
              <Text size="small">PostgresQL</Text>
            </Box>
            <Box direction="row" gap="small">
              <i class="devicon-mongodb-plain colored"></i>
              <Text size="small">MongoDB</Text>
            </Box>
          </Box>
        </div>
        <div>
          <Heading level={5} margin={{ vertical: "small" }}>
            Concepts
          </Heading>
          <Box direction="column" gap="xsmall">
            <Box direction="row" gap="small">
              <Text size="small">Object Oriented Programming</Text>
            </Box>
            <Box direction="row" gap="small">
              <Text size="small">Restful API's</Text>
            </Box>
            <Box direction="row" gap="small">
              <Text size="small">{"Scrum/Agile/Waterfall"}</Text>
            </Box>
            <Box direction="row" gap="small">
              <Text size="small">{"PERN/MERN Stack"}</Text>
            </Box>
            <Box direction="row" gap="small">
              <Text size="small">
                {"Serverless Compute (Netlify Function's/AWS Lambda)"}
              </Text>
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default Home;
