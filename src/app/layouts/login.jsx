/* eslint-disable multiline-ternary */
import React, { useState } from "react";
import LoginForm from "../components/ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFormType = () => {
    setFormType((prev) => (prev === "register" ? "login" : "register"));
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 .offset-md-3 shadow p-4">
          {formType === "register" ? (
            <>
              <h3 className="mb-4">Регистрация</h3>
              <RegisterForm />
              <p className="mt-2 text-center">
                У вас есть аккаунт?
                <a role="button" className="blue" onClick={toggleFormType}>
                  Войти
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Вход</h3>
              <LoginForm />
              <p className="mt-2 text-center">
                Нет аккаунта?{" "}
                <a role="button" className="blue" onClick={toggleFormType}>
                  Зарегистрироваться
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
