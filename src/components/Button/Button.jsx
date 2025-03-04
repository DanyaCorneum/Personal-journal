import "./Button.css";

function Button({ text, className }) {
  return (
    <button className={`button ${className !== undefined ? className : ""}`}>
      {text}
    </button>
  );
}

export default Button;
