import { useEffect, useState } from "react";
import { UseAddLog, UseWeather } from "./graphql/query";

export default () => {
  const [text, setText] = useState("Los Angeles");
  const [prevCity, setPrevCity] = useState("Los Angeles");
  const [error, setError] = useState(false);
  const [prevData, setPrevData] = useState({});
  const [username, setUsername] = useState("");
  const [getWeather, { loading, data }] = UseWeather(
    setPrevData,
    setError,
    username
  );
  const { addLog } = UseAddLog();
  useEffect(() => {
    getWeather({ variables: { city: text } });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather({ variables: { city: text } });
    if (username) {
      addLog({
        variables: {
          username,
          log: { location: data.getWeather.name, time: new Date() },
        },
      });
    }
  };

  const refresh = () => {
    getWeather({ variables: { city: prevCity } });
  };

  useEffect(() => {
    if (prevData.getWeather) setPrevCity(prevData.getWeather.name);
    if (username) {
      addLog({
        variables: {
          username,
          log: { location: prevData.getWeather.name, time: new Date() },
        },
      });
    }
  }, [prevData]);

  return {
    refresh,
    loading,
    text: [text, setText],
    error: [error, setError],
    data,
    handleSubmit,
    prevData,
    username: [username, setUsername],
  };
};
