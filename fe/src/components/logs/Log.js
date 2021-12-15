import { TextField } from "@material-ui/core";
import React from "react";
import LogF from "./LogF";

const Log = (props) => {
  const { username, refresh } = props;
  const { logs } = LogF({ username, refresh });
  return (
    <TextField
      maxRows={5}
      value={logs
        .map((l) => `\n${l.location}\n${l.time}\n`)
        .reverse()
        .join("")}
      contentEditable={false}
      multiline
      fullWidth
    ></TextField>
  );
};

export default Log;
