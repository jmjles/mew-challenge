import React from "react";
const { useMutation, useLazyQuery, useQuery } = require("@apollo/client");
const {
  loginMutation,
  weatherQuery,
  logMutation,
  userQuery,
} = require("./schema");

export const UseAddLog = () => {
  const [addLog, { data }] = useMutation(logMutation);
  return { addLog, data };
};

export const GetLogs = (setLogs) => {
  const [getLogs, { data }] = useLazyQuery(userQuery, {
    onCompleted: (data) => {
      setLogs(data.getLogs.logs);
    },
  });
  return { getLogs };
};

export const UseAddUser = (setUser) => {
  const [addUser, { data, loading, error }] = useMutation(loginMutation, {
    onCompleted: (data) => {
      setUser(data.addUser);
    },
  });
  return [addUser, { data, loading, error }];
};

export const UseWeather = (setData, setError) => {
  const [getWeather, { loading, error, data }] = useLazyQuery(weatherQuery, {
    pollInterval: 60000,
    onCompleted: (data) => {
      setData(data);
    },
    onError: () => {
      setError(true);
    },
  });
  return [getWeather, { loading, error, data }];
};
