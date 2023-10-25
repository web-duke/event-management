import React from "react";
import "./style.scss";
import { EventInterface } from "../../interfaces/eventInterface";

const EventCard: React.FC<EventInterface> = ({
  name,
  description,
  startDate,
  endDate,
}) => {
  return (
    <div className="EventCard">
      <h2 className="EventCard__name">{name}</h2>
      <div>{description}</div>
      <div className="EventCard__dates">
        <div>{startDate?.toString()}</div>
        <div>{endDate?.toString()}</div>
      </div>
    </div>
  );
};

export default EventCard;
