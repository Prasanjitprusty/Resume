import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className={`bg-gray-800 w-full h-20 rounded flex items-center px-8 transition-colors duration-300`}>
        <div className="bg-white p-1 rounded">
          <img
            src={"/images/almabetter.png"}
            alt="logo"
            className="w-48 h-auto"
          />
        </div>
        <ul className="flex ml-auto gap-8">
          <li>
            <NavLink 
              to={"/"} 
              className={({ isActive }) => 
                isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
              }
            >
              Resume Template
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={"/myresume"} 
              className={({ isActive }) => 
                isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
              }
            >
              My Resume
            </NavLink>
          </li>
          <li>
            <NavLink 
              to={"/aboutUs"} 
              className={({ isActive }) => 
                isActive ? 'text-blue-500' : 'text-gray-400 hover:text-blue-500'
              }
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
