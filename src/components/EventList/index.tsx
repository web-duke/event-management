import React, { useEffect, useState } from "react";
import { fetchEvents } from "../../api/eventsAPI";
import EventInterface from "../../interfaces/eventInterface";
import "./style.scss";

const EventList: React.FC = () => {
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

    getEvents();
  }, []);

  return (
    <div className="EventList">
      {loading ? (
        <p>Chargement des événements...</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.name} - {event.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EventList;
