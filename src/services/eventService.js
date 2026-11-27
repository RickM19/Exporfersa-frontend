import { api } from "../lib/axios";

const getEvents = async (filters = {}, signal) => {
  const response = await api.get("/events", {
    params: filters,
    signal
  });

  return response.data;
};

const eventService = {
  getEvents
};

export default eventService;
