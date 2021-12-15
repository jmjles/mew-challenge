import { Container, Grid, CircularProgress } from "@material-ui/core";
import "./App.css";
import AppF from "./AppF";
import MyCard from "./components/card/MyCard";

function App() {
  const {
    handleSubmit,
    data,
    error,
    loading,
    refresh,
    prevData,
    username,
    text: [text, setText],
  } = AppF();
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          {prevData.getWeather ? (
            <MyCard
              data={data}
              prevData={prevData}
              loading={loading}
              refresh={refresh}
              error={error}
              text={[text, setText]}
              handleSubmit={handleSubmit}
              username={username}
            />
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
