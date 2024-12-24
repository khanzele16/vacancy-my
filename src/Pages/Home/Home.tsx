import React from "react";
import setTitle from "../../utils/setTitle.ts";
import "./Home.css";
import { NavLink } from "react-router-dom";

type itemCatalog = {
  name: string;
  id: number;
  href: string;
};

const catalog: itemCatalog[] = [
  {
    name: "Профиль",
    id: 1,
    href: "/profile",
  },
  {
    name: "Вакансии",
    id: 2,
    href: "/vacancy",
  },
  {
    name: "Подработки",
    id: 3,
    href: "/underworking",
  },
  {
    name: "Опросы",
    id: 4,
    href: "/surveys",
  },
  {
    name: "Оценить собственника ПВЗ",
    id: 5,
    href: "/rating-owner",
  },
  {
    name: "Информация",
    id: 6,
    href: "/information",
  },
];

const Home: React.FC = () => {
  setTitle("Главная");
  return (
    <div className="Home">
      <h2>
        место
        <br />
        встречи - пвз
      </h2>
      <ul className="Home-catalog">
        {catalog.map((item) => (
          <NavLink key={item.id} to={item.href}>
            <li>{item.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Home;
