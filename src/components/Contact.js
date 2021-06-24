import { Box, Heading } from "grommet";

function Contact(props) {
  return (
    <Box
      fill="true"
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
