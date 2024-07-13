import Handlebars from "handlebars";
import { tmpl } from "./edit-profile.tmpl.js";
import "./edit-profile.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Avatar } from "../../../../components/avatar/index.js";
import { Link } from "../../../../components/links/index.js";
import avatar from "../../../../../static/img/user2.png";

export const EditProfile = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({ url: avatar }),
    LinkProfilePage: Link({
      to: "/profile",
      text: "Вернуться в профиль",
      className: "form_link",
    }),
    fields: [
        {
        label: "Имя:",
        for: "first_name",
        input: Input({
          type: "text",
          name: "first_name",
          id: "first_name",
          value: "Петр",
        }),
      },
      {
        label: "Фамилия:",
        for: "second_name",
        input: Input({
          type: "text",
          name: "second_name",
          id: "second_name",
          value: "Петров",
        }),
      },
      {
        label: "Логин:",
        for: "login",
        input: Input({
          type: "text",
          name: "login",
          id: "login",
          value: "Petr",
        }),
      },
      {
        label: "E-mail:",
        for: "email",
        input: Input({
          type: "email",
          name: "email",
          id: "email",
          value: "petrptrov@mail.ru",
        }),
      },
      {
        label: "Номер телефона:",
        for: "phone",
        input: Input({
          type: "tel",
          name: "phone",
          id: "phone",
          value: "+7-(999)-999-99-99",
        }),
      },
      {
        label: "Имя в чате:",
        for: "display_name",
        input: Input({
          type: "text",
          name: "display_name",
          id: "display_name",
          value: "Петр",
        }),
      },
    ],
    btnSave: Button({
      type: "submit",
      text: "Сохранить",
    }),
  });
};