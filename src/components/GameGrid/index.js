import React from "react";

export const GameGrid = ({ children }) => {
  return <div className="grid grid-cols-3 grid-rows-3">{children}</div>;
};
