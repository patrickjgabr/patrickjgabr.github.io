import { Box, Heading, TextArea, TextInput, Button, Text } from "grommet";
import { Container, Row, Col } from "react-grid-system";

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
      <Container style={{ width: "100%" }}>
        <Row>
          <Col xs={12} md={4}>
            <Box>Text</Box>
          </Col>
          <Col xs={12} md={8}>
            <Box>
              <Container style={{ marginLeft: 0, marginRight: 0 }}>
                <Row>
                  <Col xs={12} md={6}>
                    Name
                    <TextInput></TextInput>
                  </Col>
                  <Col xs={12} md={6}>
                    Email
                    <TextInput></TextInput>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Text margin={{ bottom: "large" }}>Message</Text>
                  </Col>
                  <Col xs={12} md={12}>
                    <TextArea
                      resize={false}
                      style={{ height: "250px" }}
                    ></TextArea>
                  </Col>
                </Row>
                <Row>
                  <Button
                    label="submit"
                    style={{
                      marginRight: "auto",
                      marginTop: 20,
                      marginLeft: "auto",
                    }}
                  ></Button>
                </Row>
              </Container>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  );
}

export default Contact;
