import { api } from "../lib/axios";

const getProjects = async (filters = {}, signal) => {
  const response = await api.get("/projects", {
    params: filters,
    signal
  });

  return response.data;
};

const projectService = {
  getProjects
};

export default projectService;
