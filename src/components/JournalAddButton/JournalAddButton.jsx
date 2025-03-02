import "./JournalAddButton.css";
import CardButton from "../CardButton/CardButton";

function JournalAddButton() {
  return (
    <CardButton classList="add-bt">
      <img src="/plus.svg" alt="" />
      Новое воспоминание
    </CardButton>
  );
}

export default JournalAddButton;
