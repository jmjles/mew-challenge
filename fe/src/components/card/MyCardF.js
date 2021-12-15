import React, { useState } from "react";

const MyCardF = () => {
  const [search, setSearch] = useState(false);
  const [login, setLogin] = useState(false);
  const [log, setLog] = useState(false);
  const [user, setUser] = useState({});
  const toggleSearch = () => setSearch((prev) => !prev);
  const toggleLogin = () => setLogin((prev) => !prev);
  const toggleLog = () => setLog((prev) => !prev);

  return {
    search,
    login,
    log,
    toggleSearch,
    toggleLog,
    toggleLogin,
    user: [user, setUser],
  };
};

export default MyCardF;
