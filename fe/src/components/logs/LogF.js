import React, { useEffect, useState } from "react";
import { GetLogs } from "../../graphql/query";

const LogF = ({ username, refresh }) => {
  const [userName] = username;
  const [logs, setLogs] = useState([]);
  const { getLogs } = GetLogs(setLogs);
  useEffect(() => {
    getLogs({ variables: { username: userName } });
  }, [refresh]);

  return { logs };
};

export default LogF;
