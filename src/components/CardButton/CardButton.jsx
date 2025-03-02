import "./CardButton.css";

function CardButton({ children, classList }) {
  const cl = `card-button ${classList ? " " + classList : " "}`;
  return <button className={cl}>{children}</button>;
}

export default CardButton;
