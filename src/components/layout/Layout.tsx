import { ReactNode } from "react";
import NavBar from "./NavBar";
import "./layout.module.scss";
const Layout: React.FC<{ children?: ReactNode }> = (props) => {
  const footerStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "0",
    left: "10px",
  };
  return (
    <>
      <main className="container">
        <NavBar />
        {props.children}
        <footer style={footerStyle}>
          This is a Demo React Application with Typescript
        </footer>
      </main>
    </>
  );
};

export default Layout;
