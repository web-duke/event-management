import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalSlice";
import EventForm from "../../forms/EventForm";
import "./style.scss";

const AddEventModal: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: any) => state.modal.isOpen);

  return isOpen ? (
    <div className="AddEventModal">
      <div className="AddEventModal__content">
        <button
          className="AddEventModal__content__closeButton"
          onClick={() => dispatch(closeModal())}
        >
          X
        </button>

        <EventForm />
      </div>
    </div>
  ) : null;
};

export default AddEventModal;
