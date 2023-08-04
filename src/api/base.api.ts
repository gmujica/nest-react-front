import axios from "axios";

export const BASE_URL = "https://rickandmortyapi.com/api/";
export const BASE_EVENT_URL = "http://localhost:3000/"

export const instance = axios.create({
    baseURL: BASE_URL
})

export const eventInctance = axios.create({
    baseURL: BASE_EVENT_URL
})