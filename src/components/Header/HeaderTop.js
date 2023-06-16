import React from "react";
import {BackGround} from "../../Helpers/Colors";
import DarkLight from "./DarkLight";
import Logo from "./Logo";
import Sun from "./Sun";
import Celender from "./Celender";

const HeaderTop = () => {
  return (
    <section style={{background: BackGround}}>
      <section className="h-auto px-4 py-7 flex items-center justify-between container m-auto">
        <div className="flex items-center">
          <Logo />
          <DarkLight />
        </div>
        <div className="flex items-center">
          <Sun />
          <Celender />
        </div>
      </section>
    </section>
  );
};

export default HeaderTop;
