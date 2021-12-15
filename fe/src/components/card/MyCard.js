import React from "react";
import {
  Card,
  CardActions,
  CardMedia,
  CardHeader,
  IconButton,
  CardContent,
  Typography as Font,
  CircularProgress,
  Collapse,
  Button,
  Grid,
} from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import Search from "../search/Search";
import myCardF from "./MyCardF";
import Login from "../login/Login";
import Log from "../logs/Log";
const MyCard = (props) => {
  const {
    loading,
    data,
    refresh,
    text,
    handleSubmit,
    error,
    prevData,
    username,
  } = props;
  const {
    search,
    log,
    login,
    toggleLog,
    toggleLogin,
    toggleSearch,
    user: [user, setUser],
  } = myCardF();

  const weatherData = data ? data : prevData;
  const {
    getWeather: {
      name,
      icon,
      weather,
      main: { temp, feels_like },
    },
  } = weatherData;
  return (
    <div>
      <Card style={{ position: "relative" }}>
        {loading && (
          <div
            className="overlay"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          >
            <CircularProgress
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            />
            <div
              className="darken"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.25)",
                zIndex: 99,
              }}
            ></div>
          </div>
        )}

        <CardHeader
          action={
            <IconButton onClick={refresh}>
              <Refresh />
            </IconButton>
          }
          title={name}
          subheader={user.username ? `Logged in as: ${user.username}` : ""}
        ></CardHeader>
        <CardMedia
          image={icon}
          style={{ height: 150 }}
          alt={`${weather[0].main} icon`}
          title={weather[0].main}
        />
        <CardContent>
          <Font variant="body2">Current Temp: {temp}</Font>
          <Font variant="body2">Feels Like: {feels_like}</Font>
          {!user.username && (
            <Collapse in={login}>
              <Login user={[user, setUser]} username={username} />
            </Collapse>
          )}
          <Collapse in={search}>
            <Search text={text} handleSubmit={handleSubmit} error={error} />
          </Collapse>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button onClick={toggleSearch}>
                {search ? "Close Search" : "Search"}
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            {!user.username && <Button onClick={toggleLogin}>Login</Button>}
            {user.username && <Button onClick={toggleLog}>Logs</Button>}
          </Grid>
        </CardActions>
        {user.username && (
          <Collapse in={log}>
            <Log username={username} refresh={log} />
          </Collapse>
        )}
      </Card>
    </div>
  );
};

export default MyCard;
