import React from "react";
import { useDispatch } from "react-redux";
import EventList from "./components/EventList";
import AddEventModal from "./components/modals/AddEventModal";
import { openModal } from "./redux/modalSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <h1 className="App__title">Event Manager</h1>

        <div className="mainContainer">
          <button onClick={() => dispatch(openModal())}>
            Ajouter un événement
          </button>

          <EventList />
        </div>
      </div>

      <AddEventModal />
    </>
  );
}

export default App;
