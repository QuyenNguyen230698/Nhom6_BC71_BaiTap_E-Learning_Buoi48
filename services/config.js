import axios from "axios"
import { store } from "../src/main"
import { turnOffLoading, turnOnLoading } from "../src/redux/loadingSlice";

export let http = axios.create({
    baseURL: "https://elearningnew.cybersoft.edu.vn",
    headers: {
        TokenCybersoft:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("DATA_USER"))?.accessToken || ''}`,
        "Content-Type": "application/json",
    }
})

//#region Interceptors Axios
// http.interceptors.request.use(function (config) {
//     store.dispatch(turnOnLoading())
//     return config;
//   }, function (error) {
//     store.dispatch(turnOffLoading())
//     return Promise.reject(error);
//   });

// http.interceptors.response.use(function (response) {
//     store.dispatch(turnOffLoading())
//     return response;
//   }, function (error) {
//     return Promise.reject(error);
//   });
//#endregion
