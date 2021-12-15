import React from "react";
import { IconButton, TextField, Grid } from "@material-ui/core";
import LoginF from "./LoginF";
import { Send } from "@material-ui/icons";
const Login = ({ user, username }) => {
  console.log(username)
  const { userName, handleChange, handleSubmit } = LoginF({ user, username });
  return (
    <form onSubmit={handleSubmit}>
      <Grid container wrap="nowrap">
        <Grid item>
          <TextField
            value={userName}
            onChange={handleChange}
            label="Username"
          />
        </Grid>
        <Grid item>
          <IconButton variant="outlined" type="submit">
            <Send />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
