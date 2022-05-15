import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <h1>Home - Todo App Home Page</h1>
      <Outlet></Outlet>
    </>
  );
};
