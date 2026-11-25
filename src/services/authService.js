import { api } from "../lib/axios";

export const authService = {
  async login(credentials) {
    const { data } = await api.post("/auth/login", credentials);
    return data;
  },

  async getCurrentUser(config) {
    const { data } = await api.get("/user/me", config);
    return data;
  }
};
