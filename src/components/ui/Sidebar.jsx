import React from "react";
import ThemesDrop from "../ThemesDrop";

function Sidebar() {
  return (
    <div className="bg-[#373B53] flex md:flex-col justify-between items-center sidebar__content w-full Sidebar_content">
      <img className="" src="./image/Icon.svg" alt="icon" />

      <div id="sideBar_right" className="flex md:flex-col gap-[37px] w-full justify-end items-start ">
        <ThemesDrop />
        <hr className="w-full bg-[#494E6E] border-0 text-[#494E6E] h-1.5 hidden" />
        <img
          className="mb-[24px]"
          src="./image/Avatar.svg"
          alt="Avatar"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}

export default Sidebar;
