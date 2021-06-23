import { Box } from "grommet";

function ContentBox(props) {
  return (
    <Box
      width={{ min: "300px", max: "1350px" }}
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
