import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button/button";
import styles from "./form.module.css";
import { hidePopup } from "../popup/popupSlice";
import { Inote, editNote, removeNote } from "./notesSlice";

export default function EditNote(props: Inote) {
  const [title, setTitle] = useState<string>(props.title);
  const [content, setContent] = useState<string>(props.content);
  const [processing, setProcessing] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!processing) {
      setProcessing(true);

      dispatch(editNote({ title, content, id: props.id }));
      dispatch(hidePopup());
      setProcessing(false);
    }
  };

  const handleRemove = () => {
    if (!processing) {
      setProcessing(true);

      dispatch(removeNote(props.id));
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className={styles.col}>
        <Button
          title="Remove"
          action={handleRemove}
          error={true}
          loading={processing}
        />
        <Button title="Save" action={handleAdd} loading={processing} />
      </div>
    </div>
  );
}
