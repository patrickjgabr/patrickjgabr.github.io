import {
  Box,
  Heading,
  Form,
  Button,
  FormField,
  TextInput,
  TextArea,
  Text,
  Markdown,
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
      <Box
        direction="row-responsive"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <Box
          width={"250px"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Markdown style={{ textAlign: "center" }}>
            If you have any questions, job opportunities or want to get in
            touch, feel free to contact me via the provided form or email me
            directly at: **patrickjgabr@gmail.com**
          </Markdown>
        </Box>
        <Box gap="small">
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
