import api from "./api-client";

export const getAllCountries = async () => {
  const response = await api.get(`/countries`);
  return response.data;
};

export const getEvent = async (id) => {
  const response = await api.get(`/view_event/?public_id=${id}`);
  return response.data;
};
