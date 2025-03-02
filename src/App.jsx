import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./layout/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const submit = (newData) => {
    setData([
      ...data,
      {
        id: data.length !== 0 ? Math.max(...data.map((i) => i.id)) + 1 : 0,
        title: newData.title,
        text: newData.text,
        date: newData.date,
      },
    ]);
    console.log();
  };
  return (
    <div className="app">
      <LeftPanel>
        <Header></Header>
        <JournalAddButton />
        <JournalList>
          {data.map((el) => (
            <JournalItem
              key={el.id}
              title={el.title}
              date={el.date}
              text={el.text}
            ></JournalItem>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm func={submit} />
      </Body>
    </div>
  );
}

export default App;
