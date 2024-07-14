import Handlebars from "handlebars";
import { tmpl } from "./edit-password.tmpl.js";
import "./edit-password.scss";

import { Button } from "../../../../components/button/index.js";
import { Input } from "../../../../components/input/index.js";
import { Avatar } from "../../../../components/avatar/index.js";
import { Link } from "../../../../components/links/index.js";
import avatar from "../../../../../static/img/user2.png";

export const EditPassword = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({ url: avatar }),
    LinkProfolePage: Link({
      to: "/profile",
      text: "Вернуться в профиль",
      className: "form_link",
    }),
    fields: [
        {
        label: "Старый пароль:",
        input: Input({
          type: "password",
          name: "old_password",
          id: "old_password",
        }),
      },
      {
        label: "Новый пароль:",
        input: Input({
          type: "password",
          name: "new_password",
          id: "new_password",
        }),
      },
      {
        label: "Повторите новый пароль:",
        input: Input({
          type: "password",
          name: "removenew_password",
          id: "removenew_password",
        }),
      },
    ],
    btnSave: Button({
      type: "submit",
      text: "Сохранить",
    }),
  });
};
