import "../style/style.scss";

import { Home } from "../../src/pages/home/index.js";
import { Login } from "../../src/pages/home/modules/login/index.js";
import { Register } from "../../src/pages/home/modules/register/index.js";
import { ErrorPage } from "../../src/pages/error-page/index.js";
import { NotFoundPage } from "../../src/pages/not-found-page/index.js";
import { Profile } from "../../src/pages/profile/index.js";
import { Chats } from "../../src/modules/chat/index.js";
import { EditProfile } from "../../src/pages/profile/modules/edit-profile/index.js";
import { EditPassword } from "../../src/pages/profile/modules/edit-password/index.js";

const ROUTES = {
  "/": Home(),
  "/404": NotFoundPage ({ statusCode: "404", message: "Такой страницы не существует." }),
  "/500": ErrorPage ({ statusCode: "500", message: "Мы уже чиним." }),
  "/profile": Profile(),
  "/edit-profile": EditProfile(),
  "/edit-password": EditPassword(),
  "/chats": Chats(),
  "/login": Login(),
  "/register": Register(),
};

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("add");

  if (root) {
    root.innerHTML = ROUTES[window.location.pathname];
  }
});