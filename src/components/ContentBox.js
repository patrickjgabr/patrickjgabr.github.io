import { Box } from "grommet";

function ContentBox(props) {
  return (
    <Box
      pad="medium"
      round="xsmall"
      background="#ffffff"
      margin={{ bottom: "large" }}
    >
      {props.content}
    </Box>
  );
}

export default ContentBox;
