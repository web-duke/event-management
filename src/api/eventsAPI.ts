import axios from "axios";
import { EventInterface } from "../interfaces/eventInterface";

const apiBaseUrl = "http://localhost:5000";

export const fetchEvents = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/events`);

    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);

    throw error;
  }
};

export const addEvent = async (event: EventInterface) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/events`, event);

    return response.data;
  } catch (error) {
    console.error("There was an error!", error);
  }
};
