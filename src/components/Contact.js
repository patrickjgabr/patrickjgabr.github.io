import { Box, Heading, TextArea, TextInput, Button, Text } from "grommet";
import { Container, Row, Col } from "react-grid-system";

function Contact(props) {
  return (
    <Box
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <Heading level={3} margin={{ top: "none", bottom: "small" }}>
        Contact
      </Heading>
    </Box>
  );
}

export default Contact;
