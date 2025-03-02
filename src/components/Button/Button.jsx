import "./Button.css";
import { useState } from "react";

function Button({ text }) {
  return <button className="button save">{text}</button>;
}

export default Button;
