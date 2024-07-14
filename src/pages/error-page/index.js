import Handlebars from "handlebars";
import "./error-page.scss";
import { tmpl } from "./error-page.tmpl.js";
import { Link } from "../../components/links/index.js";

export const ErrorPage = ({ statusCode, message }) => {
  return Handlebars.compile(tmpl)({
    statusCode,
    message,
    LinkChatPage: Link({
      to: "/chat",
      text: "Вернуться к чатам",
      className: "form_link",
    }),
  });
};
