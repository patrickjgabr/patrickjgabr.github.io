import { Box } from "grommet";

function ContentBox(props) {
  return (
    <Box
      fill="true"
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
