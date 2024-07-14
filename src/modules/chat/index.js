import Handlebars from "handlebars";
import { tmpl } from "./chat.tmpl.js";
import "./chat.scss";
import { Link } from "../../components/links/index.js";
<<<<<<< HEAD
import { Avatarchat } from "./components/chat-avatar/index.js";

import avatarchat from "../../../static/img/user3.png";


export const Chats = () => {
  return Handlebars.compile(tmpl)({
    avatarchat: Avatarchat({ url: avatarchat }),
=======
import { Avatar} from "./components/chat-avatar/index.js";

import avatarchat from "../../../static/img/user2.png";

export const Chats = () => {
  return Handlebars.compile(tmpl)({
    avatarchat: Avatar({ url: avatarchat }),
>>>>>>> main
    profileLink: Link({
      to: "/profile",
      className: "chats__profile-link",
      text: "Профиль",
    }),
  });
};