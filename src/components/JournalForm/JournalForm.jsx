import { useEffect, useState } from "react";
import styles from "./JournalForm.module.css";
import Button from "../Button/Button";

const INIT_STATE = { title: true, date: true, text: true };

function JournalForm({ onSubmit }) {
  const [isFormValid, setFormValid] = useState({ ...INIT_STATE });

  useEffect(() => {
    let timer;
    if (!isFormValid.title || !isFormValid.date || !isFormValid.text) {
      timer = setTimeout(() => setFormValid(INIT_STATE), 2000);
    }
    return () => clearTimeout(timer);
  }, [isFormValid]);

  const addJournalItem = (e) => {
    e.preventDefault();
    let valid = true;
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    if (formProps.text.length === 0) {
      setFormValid((state) => ({ ...state, text: false }));
      valid = false;
    } else {
      setFormValid((state) => ({ ...state, text: true }));
    }
    if (formProps.title.length === 0) {
      setFormValid((state) => ({ ...state, title: false }));
      valid = false;
    } else {
      setFormValid((state) => ({ ...state, title: true }));
    }
    if (formProps.formDate === "") {
      setFormValid((state) => ({ ...state, date: false }));
      valid = false;
    } else {
      setFormValid((state) => ({ ...state, date: true }));
    }
    console.log(formProps.formDate);
    console.log(formProps);
    if (!valid) {
      return;
    }
    onSubmit(formProps);
  };

  return (
    <>
      <form className={styles["journal-form"]} onSubmit={addJournalItem}>
        <input
          name="title"
          className={`${styles["title"]} ${
            isFormValid.title ? "" : styles["invalid"]
          }`}
        />
        <input
          name="formDate"
          type="date"
          className={`${styles["date"]} ${
            isFormValid.date ? "" : styles["invalid"]
          }`}
        />
        <input
          name="text"
          type="text"
          className={` ${styles["text"]} ${
            isFormValid.text ? "" : styles["invalid"]
          }`}
        />
        <textarea
          name="post"
          className={styles["post"]}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <Button className={`${styles["save"]}`} text="Сохранить"></Button>
      </form>
    </>
  );
}

export default JournalForm;
