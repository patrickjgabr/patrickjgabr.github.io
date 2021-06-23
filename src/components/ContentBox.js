import { Box } from "grommet";

function ContentBox(props) {
  return (
    <Box
      width={{ max: "65%" }}
      margin={{ horizontal: "auto", vertical: "large" }}
      pad="large"
      round="xsmall"
      background="#ffffff"
    >
      {props.content}
    </Box>
  );
}

export default ContentBox;
