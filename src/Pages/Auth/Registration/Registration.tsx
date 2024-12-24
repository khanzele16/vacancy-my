import React from "react";
import setTitle from "../../../utils/setTitle.ts";
import Header from "./../../../Components/Header/Header";
import "./Registration.css";
import { Check, X } from "lucide-react";

type typeCard = {
  id: number;
  name: string;
};

const types: typeCard[] = [
  {
    id: 1,
    name: "Работник",
  },
  {
    id: 2,
    name: "Владелец",
  },
];

const marketplaceCatalog: typeCard[] = [
  {
    id: 1,
    name: "WB",
  },
  {
    id: 2,
    name: "Ozon",
  },
  {
    id: 3,
    name: "YM",
  },
];

const Registration: React.FC = () => {
  const [type, setType] = React.useState(1);
  const [marketplaces, setMarketplaces] = React.useState([]);
  setTitle("Регистрация");
  return (
    <div className="Registration">
      <Header href='/login' isBack={true} title="Регистрация" />
      <div className="Registration-form">
        <ul className="Registration-form-type">
          {types.map((obj) => (
            <li
              className={type === obj.id ? "active" : ""}
              onClick={() => setType(obj.id)}
              key={obj.id}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <div className="Registration-form-inputs">
          <div id="name-input">
            <p>ФИО</p>
            <input type="text" />
          </div>
          <div id="telephone-input">
            <p>Телефон</p>
            <input type="text" />
          </div>
          <div id="date-input">
            <p>Дата рождения</p>
            <input type="date" />
          </div>
          <div id="address-input">
            <p>Адрес</p>
            <input type="text" />
          </div>
          <div id="email-input">
            <p>Email</p>
            <input type="text" />
          </div>
        </div>
        <div className="Registration-form-pvz">
          <p>Есть ли опыт работы на ПВЗ?</p>
          <div className="Registration-form-pvz-checkbox">
            <Check style={  { color: "white" }} size={24} />
            <X size={24} />
          </div>
        </div>
        <div className="Registration-form-marketplace">
          <p>В каком Маркетплейсе?</p>
          <ul className="Registration-form-marketplace-catalog">
            {marketplaceCatalog.map((obj) => (
              <li
                key={obj.id}
                className={
                  marketplaces.some((el) => el.id === obj.id) ? "active" : ""
                }
                onClick={() => {
                  setMarketplaces((prev) => {
                    const isSelected = prev.some((el) => el.id === obj.id);
                    if (isSelected) {
                      return prev.filter((el) => el.id !== obj.id);
                    } else {
                      return [...prev, obj];
                    }
                  });
                }}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
        <div id='registration-rating'>Ваш рейтинг: 4.9</div>
        <button id="registration-create-profile">Создать профиль</button>
        <p id='registration-create-policy'>
          Нажимая кнопку “Создать профиль” вы соглашаетесь с политикой обработки
          персональных данных
        </p>
      </div>
    </div>
  );
};

export default Registration;
