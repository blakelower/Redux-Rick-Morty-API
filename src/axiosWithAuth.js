import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: "https://rickandmortyapi.com/api/",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
}