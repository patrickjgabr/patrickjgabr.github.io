import { Box, Text, Button } from "grommet";

function Project(props) {
  return (
    <Box
      style={{
        minHeight: "280px",
        marginLeft: "10px",
        marginRight: "10px",
        borderRadius: "5px",
        boxShadow: "0px 0px 0px 1px black",
        background: "#44475a",
      }}
    >
      <Box
        style={{
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
          textAlign: "center",
          position: "relative",
          height: "32px",
          lineHeight: "32px",
          background: "#282a36",
        }}
      >
        <div style={{ color: "white", fontSize: "16px" }}>
          {props.project.name}
        </div>
        <Box
          style={{
            position: "absolute",
            right: 0,
            verticalAlign: "middle",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "row",
            alignItems: "center",
            width: "100px",
            height: "32px",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#f1fa8c",
              borderRadius: "50%",
              fill: true,
            }}
          />
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#50fa7b",
              borderRadius: "50%",
              fill: true,
            }}
          />
          <div
            style={{
              width: "16px",
              height: "16px",
              background: "#ff5555",
              borderRadius: "50%",
              fill: true,
            }}
          />
        </Box>
      </Box>
      <Box margin="medium">
        <Text color={props.project.statusColor} id="summary" size="small">
          {props.project.status}
        </Text>
        <Text color="white" id="summary" size="small">
          {props.project.summary}
        </Text>
      </Box>
    </Box>
  );
}

export default Project;
