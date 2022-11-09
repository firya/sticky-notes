import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Plus } from "./icons/plus.svg";
import Button from "./features/button/button";
import Popup from "./features/popup/popup";
import { RootState } from "./store";
import { showPopup } from "./features/popup/popupSlice";
import NoteList from "./features/noteList/noteList";

function App() {
  const popupIsVisible = useSelector((state: RootState) => state.popup.show);
  const dispatch = useDispatch();

  return (
    <>
      <header className="header">
        <span className="app-title">StickyNotes</span>
      </header>
      <div className="canvas">
        <NoteList />
      </div>
      <div className="sticky">
        <Button
          icon={<Plus />}
          round
          action={() => dispatch(showPopup({ type: "add", title: "Add Note" }))}
        />
      </div>
      {popupIsVisible && <Popup />}
    </>
  );
}

export default App;
