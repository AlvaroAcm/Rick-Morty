import axios from "axios"



const CharacterConfig = {
    baseURL: "https://rickandmortyapi.com/api/",
    ///timeout: 100,
    headers:{
        "Content-Type" : "application/json",
        accept: "application/json"
    }

}

export const AxiosRAM = axios.create(CharacterConfig)

