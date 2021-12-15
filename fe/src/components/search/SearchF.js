import React from "react";

export const SearchF = ({ setEr, setText, er }) => {
  const handleChange = ({ target: { value } }) => {
    if (er) setEr(false);
    setText(value);
  };
  return { handleChange };
};
