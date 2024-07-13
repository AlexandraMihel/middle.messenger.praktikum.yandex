import Handlebars from "handlebars";
import { tmpl } from "./register.tmpl.js";
import "./register.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Link } from "../../../../components/links/index.js";

export const Register = () => {
  return Handlebars.compile(tmpl)({
    btnRegister: Button({
      text: "Зарегистрироваться",
      type: "submit",
    }),
    loginLink: Link({
      text: "Войти в профиль",
      to: "/profel",
      className: "form_link",
    }),
    fields: [
      {
      input: Input({
        type: "text",
        name: "first_name",
        id: "first_name",
        placeholder: "Ваше имя",
      }),
    },
    {
      input: Input({
        type: "text",
        name: "second_name",
        id: "second_name",
        placeholder: "Ваша фамилия",
      }),
    },
    {
      input: Input({
        type: "text",
        name: "login",
        id: "login",
        placeholder: "Логин",
      }),
    },
    {
      input: Input({
        type: "email",
        name: "email",
        id: "email",
        placeholder: "Email",
      }),
    },
    {
      input: Input({
        type: "tel",
        name: "phone",
        id: "phone",
        placeholder: "Номер телефона",
      }),
    },
    {
      input: Input({
        type: "password",
        name: "password",
        id: "password",
        placeholder: "Пароль",
      }),
    },
    {
      input: Input({
        type: "password",
        name: "removepassword",
        id: "removepassword",
        placeholder: "Повторите пароль",
      }),
    },
  ],
  });
};