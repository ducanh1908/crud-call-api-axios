import axiosClient from "./axios-client";
const studentApi = {
  getAll(params) {
    const url = "/students";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/students";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/students/${data.id}`;
    return axiosClient.put(url, data);
  },

  remove(id) {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
