import { api } from "../api";

export const getCinemaToday = () => api.get("/cinema/today");
