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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetch = require("node-fetch");

function Contact(props) {
  const [value, setValue] = useState({ name: "", email: "", message: "" });
  let url = process.env.REACT_APP_FORM;
  const submit = () => {
    console.log(JSON.stringify(value));
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success == true) {
          toast.success("Form Submitted", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Something went wrong :(", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  return (
    <Box
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Heading level={3} margin={{ top: "none", bottom: "small" }}>
        Contact
      </Heading>
      <Box
        direction="row-responsive"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignContent: "space-between",
        }}
      >
        <Box
          alignSelf="center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "350px",
            paddingBottom: "50px",
            paddingTop: "30px",
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
            onReset={() => setValue({})}
            onSubmit={({ value }) => {
              submit();
            }}
          >
            <Box direction="row-responsive" gap="5%">
              <Box fill={true}>
                <FormField name="name" htmlFor="name" label="Name">
                  <TextInput id="name" name="name" />
                </FormField>
              </Box>
              <Box fill={true}>
                <FormField name="email" htmlFor="email" label="Email">
                  <TextInput id="email" name="email" />
                </FormField>
              </Box>
            </Box>

            <FormField name="message" htmlFor="message" label="Message">
              <TextArea
                id="message"
                name="message"
                resize="vertical"
                style={{ height: "200px" }}
              ></TextArea>
            </FormField>
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
