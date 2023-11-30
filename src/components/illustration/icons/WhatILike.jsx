import clsx from "clsx";
import React from "react";

const typeClassNames = {
  bug: "bg-[#eb5757]",
  feature: "bg-[#bb87fc]",
  improvement: "bg-[#4da7fc]",
};

export const WhatILike = ({ type }) =>
  React.createElement("div", {
    className: clsx(
      "flex h-[0.9rem] w-[0.9rem] items-center justify-center rounded-full",
      typeClassNames[type]
    ),
  });
