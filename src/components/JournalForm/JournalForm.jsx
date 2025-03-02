import { useState } from "react";
import "./JournalForm.css";
import Button from "../Button/Button";

function JournalForm({ func }) {
  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    func(formProps);
  };

  return (
    <>
      <form className="journal-form" onSubmit={addJournalItem}>
        <input name="title" />
        <input name="formDate" type="date" />
        <input name="text" type="text" />
        <textarea name="post" id="" cols="30" rows="10"></textarea>
        <Button text="Сохранить"></Button>
      </form>
    </>
  );
}

export default JournalForm;
