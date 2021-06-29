import {
  Box,
  Heading,
  Form,
  Button,
  FormField,
  TextInput,
  TextArea,
  Text,
} from "grommet";
import { useState } from "react";
function Contact(props) {
  const [value, setValue] = useState({});
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
      <Box direction="row-responsive">
        <Box width={"400px"}>Text</Box>
        <Box fill={true} pad={{ horizontal: "xlarge" }} gap="small">
          <Form
            value={value}
            onChange={(nextValue) => setValue(nextValue)}
            onSubmit={() => console.log(value)}
          >
            <Box direction="row-responsive" gap="5%">
              <Box fill={true}>
                <Text>Name</Text>
                <TextInput id="name" name="name" />
              </Box>
              <Box fill={true}>
                <Text>Email</Text>
                <TextInput id="email" name="email" />
              </Box>
            </Box>
            <div style={{ paddingBottom: "10px", paddingTop: "20px" }}>
              <Text>Message</Text>
            </div>
            <TextArea
              id="message"
              name="message"
              resize="vertical"
              style={{ height: "200px" }}
            ></TextArea>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "10px",
                paddingBottom: "20px",
              }}
            >
              <Button secondary label="Submit" type="submit" />
            </div>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
