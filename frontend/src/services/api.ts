import axios from "axios"

export const api = axios.create({
    baseURL: process.env.REACT_APP_VERCEL_URL ?? "http://localhost:8080"
})