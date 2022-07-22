import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelect";

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    profession: "",
    qualities: []
  });
  const [errors, setErrors] = useState({});
  const isDisabled = Object.keys(errors).length === 0;

  const [professions, setProfessions] = useState();
  const [qualities, setQualities] = useState({});

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
    api.qualities.fetchAll().then((data) => setQualities(data));
  }, []);

  const handleChange = (target) => {
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
    },
    profession: {
      isRequired: { message: "Обязательно выберите Вашу профессию" }
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
      <SelectField
        name="profession"
        value={data.profession._id}
        onChange={handleChange}
        options={professions}
        defaultOption="Choose..."
        error={errors.profession}
        label="Выберете Вашу профессию"
      />
      <RadioField
        options={[
          { name: "муж.", value: "male" },
          { name: "жен.", value: "female" },
          { name: "другое", value: "other" }
        ]}
        value={data.sex}
        onChange={handleChange}
        label="Укажите Ваш пол"
        name="sex"
      />
      <MultiSelectField
        options={qualities}
        onChange={handleChange}
        name="qualities"
        label="Выберите Ваши качества"
      />

      <button
        className="btn btn-primary w-100 mx-a"
        type="submit"
        disabled={!isDisabled}
      >
        Войти
      </button>
    </form>
  );
};

export default RegisterForm;
