import axios from "./axios";

export const profilesRequest = async () => await axios.get("/profiles");

export const profileRequest = async (id) => await axios.get(`/profiles/${id}`);

export const createRequest = async (profile) =>
  await axios.post("/profiles", profile);

export const deleteRequest = async (id) =>
  await axios.delete(`/profiles/${id}`);

export const updateRequest = async (profile, id) =>
  await axios.put(`/profiles/${id}`, profile);
