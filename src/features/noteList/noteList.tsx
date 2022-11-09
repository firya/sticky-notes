import { useSelector } from "react-redux";

import styles from "./noteList.module.css";

import { RootState } from "../../store";
import Note from "../notes/note";

export default function NoteList() {
  const notesList = useSelector((state: RootState) => state.notes.list);

  return (
    <div className={styles.wrapper}>
      {notesList.map((note) => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
}
