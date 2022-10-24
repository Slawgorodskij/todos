import { Route, Routes, } from "react-router-dom"
import { Layout } from "./layout/Layout";
import { TodoAddContainer } from "./pages/todoAdd/TodoAddContainer";
import { TodoDetaill } from "./pages/TodoDetaill";
import { TodoHome } from "./pages/TodoHome";
import { Error } from "./pages/Error";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={ <Layout /> }>
          <Route path={"/"} element={ <TodoHome /> } />
          <Route path={'/add'} element={ <TodoAddContainer /> } />
          <Route path={'/:key'} element={ <TodoDetaill /> } />
          <Route path={'/error'} element={ <Error /> } />
          <Route path={'*'} element={ <Error /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;