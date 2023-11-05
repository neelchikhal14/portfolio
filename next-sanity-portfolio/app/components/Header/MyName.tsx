"use client";

import React from "react";
import data from "../../data/data.json";
import { redirect } from "next/navigation";

const name = data.header.name;
const MyName = () => {
  return (
    <p
      className="text-3xl font-bold sm:text-4xl md:max-xl:text-5xl cursor-pointer"
      onClick={() => redirect("/")}
    >
      <span className="text-iconic-green">{name.firstCharFN}</span>
      {name.restFN}&nbsp;
      <span className="text-iconic-green">{name.firstCharLN}</span>
      {name.restLN}
    </p>
  );
};

export default MyName;
