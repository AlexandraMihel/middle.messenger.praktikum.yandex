import Handlebars from "handlebars";
import { tmpl } from "./home.tmpl.js";
import "./home.scss";
import { Link } from "../../components/links/index.js";

export const Home = () => {
  return Handlebars.compile(tmpl)({
    linkProfel: Link({
      to: "/profile",
      text: "Перейти в профиль",
      className: "mainpage_list",
    }),
    linkChats: Link({
      to: "/chats",
      text: "Посмотреть страницу с чатами",
      className: "mainpage_list",
    }),
    linkLogin: Link({
      to: "/login",
      text: "Страница входа",
      className: "mainpage_list",
    }),
    linkRegister: Link({
      to: "/register",
      text: "Страница регистрации",
      className: "mainpage_list",
    }),
    EditProfel: Link({
      to: "/edit-profile",
      text: "Страница редактирования профиля",
      className: "mainpage_list",
    }),
    EditPassword: Link({
      to: "/edit-password",
      text: "Страница изменения пароля",
      className: "mainpage_list",
    }),
    linkError: Link({
      to: "/500",
      text: "Ошибка 5**",
      className: "mainpage_list",
    }),
    linkNotFound: Link({
      to: "/404",
      text: "Ошибка 404",
      className: "mainpage_list",
    }),
  });
};
