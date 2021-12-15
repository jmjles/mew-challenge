import React, { useState } from "react";
import { UseAddUser } from "../../graphql/query";

const LoginF = (props) => {
  console.log(props);
  const {
    user: [user, setUser],
    username: [username, setUsername],
  } = props;
  const [addUser, { loading, data, error }] = UseAddUser(setUser);
  const handleChange = ({ target: { value } }) =>
    setUsername(value.toLowerCase());
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ variables: { username } });
  };
  return { userName: username, handleChange, handleSubmit };
};

export default LoginF;
