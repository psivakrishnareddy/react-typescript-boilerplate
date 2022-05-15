import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/Home";
import TodoPage from "../../pages/TodoPage";
import NavBar from "./NavBar";
import "./layout.module.scss";
import Layout from "./Layout";

const MainLayout = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todos" element={<TodoPage />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default MainLayout;
