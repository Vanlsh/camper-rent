import axios from "axios";

const BASE_URL = "https://66b201801ca8ad33d4f6191b.mockapi.io/api/v1";

export const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    limit: 4,
  },
});

export const fetchCampers = (params) => {
  const date = instance.get("/campers", { params });
  return date;
};

export const fetchCamper = (id) => {
  const date = instance.get(`/campers/${id}`);
  return date;
};
