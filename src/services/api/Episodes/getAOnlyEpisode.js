import { AxiosRAM } from "../axiosInstance"


const getAOnlyEpisode = (number = "")=>{
    return new Promise((reject , resolve)=>{
        AxiosRAM(`episode/${number}`)
        .then(res => resolve(res.data))
        .catch(err =>reject(err))
    })
}

export default getAOnlyEpisode