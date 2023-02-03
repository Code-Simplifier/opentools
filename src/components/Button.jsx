import React from "react";
import { mont_regular, lato_regular, fira } from "@/styles/fonts";
import Image from "next/image";

function Button({ title, img, model, desc }) {
  return (
    <div className="homeButton">
      <div className="flex items-center">
        {img}
        <div
          style={{ fontFamily: mont_regular.style.fontFamily }}
          className="text-white text-xl pl-3 justify-between"
        >
          <div className="capitalize">{title}</div>
          <div
            className="text-base"
            style={{ fontFamily: fira.style.fontFamily }}
          >
            {model}
          </div>
        </div>
      </div>
      <div
        className="pt-3"
        style={{ fontFamily: lato_regular.style.fontFamily }}
      >
        {desc}
      </div>
    </div>
  );
}

export default Button;
