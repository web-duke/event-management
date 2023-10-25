import axios from "axios";

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
