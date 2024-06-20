import React from "react";
import { NavLink } from "react-router-dom";
import { Navlinks } from "../constants/PortfolioData";
const NavMob = () => {
  return (
    <div className="w-dvw h-dvh">
      <ol className="flex gap-10 flex-col justify-center items-center">
        {Navlinks.map((link) => (
          <li key={link.id} className="">
            <NavLink to={link.link}>{link.label}</NavLink>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NavMob;
