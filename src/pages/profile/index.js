import Handlebars from "handlebars";
import { tmpl } from "./profile.tmpl.js";
import "./profile.scss";
import { Link } from "../../components/links/index.js";
import { Avatar } from "../../components/avatar/index.js";

import avatar from "../../../static/img/user2.png";

export const Profile = () => {
  return Handlebars.compile(tmpl)({
    avatar: Avatar({ url: avatar }),
    EdinProfile: Link({
      to: "/edit-profile",
      text: "Изменить данные",
      className: "form_link",
    }),
    LinkChatPage: Link({
        to: "/chat",
        text: "Вернуться к чатам",
        className: "form_link",
    }),
    EditPassword: Link({
      to: "/edit-password",
      text: "Изменить пароль"
    }),
  });
};
