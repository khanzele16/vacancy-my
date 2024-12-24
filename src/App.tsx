import React from "react";
import Registration from "./Pages/Auth/Registration/Registration";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Pages/NotFound/NotFound";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Profile from "./Pages/Profile/Profile";

type routerItem = {
  path: string;
  component: JSX.Element;
};

const isAuth = false

const router: routerItem[] = [
  {
    path: "/profile",
    component: isAuth ? <Profile /> : <Registration />,
  },
  {
    path: "/",
    component: isAuth ? <Home /> : <Registration />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/registration",
    component: <Registration />,
  },
  {
    path: "*",
    component: <NotFound />,
  },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {router.map((item, index) => (
          <Route key={index} path={item.path} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
