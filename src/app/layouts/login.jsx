import { React, useState, useEffect } from "react";
import TextField from "../components/textField";
import { validator } from "../../utils/validator";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const isDisabled = Object.keys(errors).length === 0;

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта обязательна для заполнения" },
      isEmail: { message: "Email введен неккоректно" }
    },
    password: {
      isRequired: { message: "Пароль обязателен для заполнения" },
      isCapitalSymbol: {
        message: "Пароль должен соджать хотя бы одну заглавную букву"
      },
      isContainDigit: {
        message: "Пароль должен соджать хотя бы одну цифру"
      },
      minLength: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    }
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 .offset-md-3 shadow">
          <div className="p-4">
            <h3 className="mb-4">login</h3>
            <form className="" onSubmit={handleSubmit}>
              <TextField
                label="Электронная почта"
                value={data.email}
                name="email"
                onChange={handleChange}
                error={errors.email}
              />
              <TextField
                label="Пароль"
                type="password"
                value={data.password}
                name="password"
                onChange={handleChange}
                error={errors.password}
              />
              <button
                className="btn btn-primary w-100 mx-a"
                type="submit"
                disabled={!isDisabled}
              >
                Войти
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
