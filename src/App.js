import { Route, Routes, } from "react-router-dom"
import { Layout } from "./layout/Layout";
import { TodoAddContainer } from "./pages/todoAdd/TodoAddContainer";
import { TodoDetail } from "./pages/TodoDetail";
import { TodoHome } from "./pages/TodoHome";
import { Error } from "./pages/Error";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import React from "react";
import {Logout} from "./pages/Logout";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={ <Layout /> }>
          <Route path={"/"} element={ <TodoHome /> } />
          <Route path={'/add'} element={ <TodoAddContainer /> } />
          <Route path={'/:key'} element={ <TodoDetail /> } />
          <Route path={'/register'} element={ <Register /> } />
          <Route path={'/login'} element={ <Login /> } />
          <Route path={'/logout'} element={ <Logout /> } />
          <Route path={'/error'} element={ <Error /> } />
          <Route path={'*'} element={ <Error /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;