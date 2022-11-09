import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./popup.module.css";
import { ReactComponent as CrossCircle } from "../../icons/cross-circle.svg";

import { Inote } from "../notes/notesSlice";
import { RootState } from "../../store";
import { hidePopup } from "./popupSlice";
import Button from "../button/button";
import AddNote from "../notes/addNote";
import EditNote from "../notes/editNote";

export default function Popup() {
  const popupData = useSelector((state: RootState) => state.popup);
  const notesList = useSelector((state: RootState) => state.notes.list);
  const [note, setNote] = useState<Inote>();

  const dispatch = useDispatch();

  useEffect(() => {
    if (popupData.type === "edit" && popupData.id) {
      setNote(notesList.find((note) => note.id === popupData.id));
    }
  }, [popupData.type, popupData.id, notesList]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>{popupData.title}</div>
          <div className={styles.close}>
            <Button
              icon={<CrossCircle />}
              action={() => dispatch(hidePopup())}
              invisible
            />
          </div>
        </div>
        <div className={styles.content}>
          {popupData.type === "add" && <AddNote />}
          {popupData.type === "edit" && popupData.id && note && (
            <EditNote title={note.title} content={note.content} id={note.id} />
          )}
        </div>
      </div>
    </div>
  );
}
