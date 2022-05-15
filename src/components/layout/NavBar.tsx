import { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./layout.module.scss";
const NavBar: React.FC<{ children?: ReactNode }> = (props) => {
  const navStyle: React.CSSProperties = {
    backgroundColor: "black",
    width: "100%",
    height: "50px",
  };

  return (
    <header>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todos">Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
