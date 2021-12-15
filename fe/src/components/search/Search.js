import React from "react";
import { IconButton, TextField, Collapse, Grid } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import { Alert, AlertTitle } from "@material-ui/lab";
import { SearchF } from "./SearchF";
const Search = (props) => {
  const { handleSubmit, text, error } = props;
  const [txt, setText] = text;
  const [er, setEr] = error;
  const { handleChange } = SearchF({ setEr, setText, er });
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Collapse in={er}>
        <Alert severity="error" variant="filled">
          <AlertTitle>Error</AlertTitle>
          Check your spelling and try again
        </Alert>
      </Collapse>
      <Grid container wrap="nowrap">
        <Grid item>
          <TextField value={txt} onChange={handleChange} label="Location" />
        </Grid>
        <Grid item>
          <IconButton variant="outlined" type="submit">
            <SearchOutlined />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default Search;
