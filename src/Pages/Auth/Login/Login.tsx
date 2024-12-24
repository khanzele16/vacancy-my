import React from "react";
import setTitle from "../../../utils/setTitle";
import Header from "../../../Components/Header/Header";

const Login: React.FC = () => {
  setTitle("Войти");
  return (
    <div className="Login">
      <Header isBack={false} title="Войти" />
      <div className="Login-form">
        <div id="email-input">
          <p>Email</p>
          <input type="text" />
        </div>
        <input />
        <button></button>
        <p>
          У вас нет аккаунта?{" "}
          <span style={{ color: "#007bff" }}>Зарегистрироваться</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
