import Handlebars from "handlebars";
import { tmpl } from "./chat.tmpl.js";
import "./chat.scss";
import { Link } from "../../components/links/index.js";
import { Avatarchat } from "./components/chat-avatar/index.js";

import avatarchat from "../../../static/img/user3.png";


export const Chats = () => {
  return Handlebars.compile(tmpl)({
    avatarchat: Avatarchat({ url: avatarchat }),
    profileLink: Link({
      to: "/profile",
      className: "chats__profile-link",
      text: "Профиль",
    }),
  });
};
