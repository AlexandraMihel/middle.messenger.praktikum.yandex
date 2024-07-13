import Handlebars from "handlebars";
import { tmpl } from "./chat.tmpl.js";
import "./chat.scss";
import { Link } from "../../components/links/index.js";

export const Chats = () => {
  return Handlebars.compile(tmpl)({
    profileLink: Link({
      to: "/profile",
      className: "chats__profile-link",
      text: "Профиль",
    }),
  });
};