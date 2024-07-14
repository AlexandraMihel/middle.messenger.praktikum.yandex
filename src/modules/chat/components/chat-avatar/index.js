import Handlebars from "handlebars";
import { tmpl } from "./chat-avatar.tmpl.js";
import "./chat-avatar.scss";

export const Avatar = (props) => {
    return Handlebars.compile(tmpl)(props);
};