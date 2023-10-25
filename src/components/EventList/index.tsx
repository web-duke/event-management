import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchEvents } from "../../api/eventsAPI";
import { EventInterface } from "../../interfaces/eventInterface";
import "./style.scss";

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
        <p>Chargement des événements...</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              <div>{event.name}</div>
              <div>{event.description}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
