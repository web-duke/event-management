import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchEvents } from "../../api/eventsAPI";
import { EventInterface } from "../../interfaces/eventInterface";
import "./style.scss";
import EventCard from "../EventCard";

const EventList: React.FC = () => {
  const isOpen = useSelector((state: any) => state.modal.isOpen);
  const [events, setEvents] = useState<EventInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const eventData = await fetchEvents();

        setEvents(eventData);
      } catch (error) {
        console.error("Erreur lors de la récupération des événements:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!isOpen) getEvents();
  }, [isOpen]);

  return (
    <div className="EventList">
      {loading ? (
        <div>loading</div>
      ) : (
        <ul className="EventList__list">
          {events.map((event) => (
            <li className="EventList__list__item" key={event.id}>
              <EventCard
                id={event.id}
                name={event.name}
                description={event.description}
                startDate={event.startDate}
                endDate={event.endDate}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
