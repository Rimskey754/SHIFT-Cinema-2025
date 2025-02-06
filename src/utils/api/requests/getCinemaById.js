import { api } from "../api";

export const getCinemaById = (id) => api.get(`/cinema/film/${id}`);
