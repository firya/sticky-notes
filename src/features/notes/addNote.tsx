import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button/button";
import styles from "./form.module.css";
import { hidePopup } from "../popup/popupSlice";
import { addNote } from "./notesSlice";

export default function AddNote() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAdd = async () => {
    if (!processing) {
      setProcessing(true);

      dispatch(addNote({ title, content }));
      dispatch(hidePopup());
      setProcessing(false);
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="title" className={styles.label}>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button title="Add" action={handleAdd} loading={processing} />
    </div>
  );
}
