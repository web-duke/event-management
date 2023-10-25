import React from "react";
import { useDispatch } from "react-redux";
import EventList from "./components/EventList";
import AddEventModal from "./components/modals/AddEventModal";
import { openModal } from "./redux/modalSlice";
import Button, { ButtonType } from "./components/Button";

function App() {
  const dispatch = useDispatch();

  const handleOpenModalClick = () => dispatch(openModal());

  return (
    <>
      <div className="App">
        <h1 className="App__title">Event Manager</h1>

        <div className="mainContainer">
          <Button
            type={ButtonType.Secondary}
            label="Ajouter un événement"
            onClick={handleOpenModalClick}
          />

          <EventList />
        </div>
      </div>

      <AddEventModal />
    </>
  );
}

export default App;
