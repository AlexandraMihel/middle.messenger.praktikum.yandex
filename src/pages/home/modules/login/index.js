import Handlebars from "handlebars";
import { tmpl } from "./login.tmpl.js";
import "./login.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Link } from "../../../../components/links/index.js";

export const Login = () => {
  return Handlebars.compile(tmpl)({
    btnLogin: Button({
      text: "Войти",
      type: "submit",
    }),
    registrationLink: Link({
      text: "Не зарегистрированы?",
      to: "/register",
      className: "form_link",
    }),
    fields: [
        {
        input: Input({
          type: "text",
          name: "login",
          id: "login",
          placeholder: "Введите логин",
        }),
      },
      {
        input: Input({
          type: "password",
          name: "password",
          id: "password",
          placeholder: "Введите пароль",
        }),
      },
    ],
  });
};