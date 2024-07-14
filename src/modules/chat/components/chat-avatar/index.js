import Handlebars from "handlebars";
import { tmpl } from "./chat-avatar.tmpl.js";
import "./chat-avatar.scss";

export const Avatarchat = (props) => {
    return Handlebars.compile(tmpl)(props);
};
