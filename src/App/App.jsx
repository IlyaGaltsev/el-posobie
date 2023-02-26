import "./App.scss";
import { Header } from "../components/Header";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

function App() {
  return (
    <div id="main" className="app__wrapepr">
      <Header />
      <Routes>
        {routes.map(({ path, Element }) => {
          return <Route path={path} element={Element} />;
        })}
      </Routes>
    </div>
  );
}

export { App };
