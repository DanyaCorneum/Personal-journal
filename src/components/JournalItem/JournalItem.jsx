import "./JournalItem.css";
import CardButton from "../CardButton/CardButton";

function JournalItem({ title, text, date }) {
  const dateFormat = new Intl.DateTimeFormat("ru-RU").format(date);
  return (
    <CardButton>
      <div className="journal-item">
        <h2 className="journal-item__header">{title}</h2>
        <div className="journal-item__inner">
          <div className="journal-item__date">{dateFormat}</div>
          <div className="journal-item__text">{text}</div>
        </div>
      </div>
    </CardButton>
  );
}

export default JournalItem;
