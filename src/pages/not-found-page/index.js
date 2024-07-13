import Handlebars from "handlebars";
import "../error-page/error-page.scss";
import { tmpl } from "./not-found-page.tmpl.js";
import { Link } from "../../components/links/index.js";

export const NotFoundPage = () => {
  return Handlebars.compile(tmpl)({
    LinkChatPage: Link({
      to: "/chat",
      text: "Вернуться к чатам",
    }),
  });
};