
import {NavLink} from 'react-router-dom'
import { Navlinks } from "../constants/PortfolioData";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="w-3/5 sm:w-1/2  lg:w-3/5">
        <NavLink className="text-4xl sm:text-5xl z-10" to='/'>Quantum Web Studio</NavLink>
      </div>
      <div className="w-2/5 sm:w-1/2  lg:w-2/5 ">
        <NavLink className=" sm:hidden text-xl text-right" to='/navmob'>Menu</NavLink> 
        <ol className="justify-evenly text-center sm:text-xl  items-center hidden sm:flex sm:visible ">
          {Navlinks.map((link) => (
            <li key={link.id} className="w-full">
              <NavLink to={link.link} >{link.label}</NavLink>
            </li>
          ))}
        </ol>
      </div>
    </header>
  );
};

export default Navbar;
