import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  const user = false;
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
      <h1 className="text-lg md:text-xl font-extrabold">
        <Link to="/">Blogosphere</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p className="cursor-pointer">
          <BsSearch />
        </p>
        <input
          className="outline-none px-3 "
          placeholder="Search a post"
          type="text"
        />
      </div>
      <div className="hidden md:flex justify-center items-center space-x-2 md:space-x-4">
        {user ? (
          <h3>
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3>
            <Link to="/login">Login</Link>
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p>
              <FaBars className="cursor-pointer relative" />
              {menu && <Menu />}
            </p>
          </div>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div className="md:hidden text-lg" onClick={showMenu}>
        <p>
          <FaBars className="cursor-pointer relative" />
          {menu && <Menu />}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
