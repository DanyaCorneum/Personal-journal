import LeftPanel from "./layout/LeftPanel/LeftPanel.jsx";
import Body from "./layout/Body/Body.jsx";
import Header from "./layout/Header/Header.jsx";
import JournalList from "./components/JournalList/JournalList.jsx";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton.jsx";
import JournalItem from "./components/JournalItem/JournalItem.jsx";
import JournalForm from "./components/JournalForm/JournalForm.jsx";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("data"));
    console.log(newData);
    if (newData) {
      setData(newData.map((item) => ({ ...item, date: new Date(item.date) })));
    }
  }, []);

  useEffect(() => {
    if (data.length) {
      localStorage.setItem("data", JSON.stringify(data));
    }
    console.log(data);
  }, [data]);

  const submit = (newData) => {
    setData([
      ...data,
      {
        id: data.length !== 0 ? Math.max(...data.map((i) => i.id)) + 1 : 0,
        title: newData.title,
        text: newData.text,
        date: newData.formDate,
      },
    ]);
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
              date={el.formDate}
              text={el.text}
            ></JournalItem>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={submit} />
      </Body>
    </div>
  );
}

export default App;
