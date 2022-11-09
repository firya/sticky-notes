import styles from "./note.module.css";
import { Inote } from "./notesSlice";
import { useDispatch } from "react-redux";
import { showPopup } from "../popup/popupSlice";
import ReactMarkdown from "react-markdown";

export default function Note({ title, content, id }: Inote) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(showPopup({ type: "edit", title: "Edit Note", id: id }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} onClick={clickHandler}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
