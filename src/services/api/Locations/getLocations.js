import { AxiosRAM } from "../axiosInstance"


const getLocations = ()=>{
    return new Promise((resolve , reject)=>{
        AxiosRAM(`location/`)
        .then(res => resolve(res.data))
        .catch(err =>reject(err))
    })
}

export default getLocations