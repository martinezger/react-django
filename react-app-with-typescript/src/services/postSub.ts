import axios from "axios"
import { PostSubResponseFromApi, Sub, SubResponseFromApi } from "../types"
import { mapFromApiSubs } from "./getAllSubs"

export const addNewSub = (newSub: Sub) => {
    return postSub(newSub).then(mapFromApiSub)
}

export const mapFromApiSub = (apiResponse: SubResponseFromApi): Sub => {
    return {
       ...apiResponse,
        followerSince:apiResponse.createdAt
    }
}

export const postSub = (newSub: Sub): Promise<PostSubResponseFromApi> =>{
    return axios.post('http://localhost:8000/subs/', newSub)
    .then(response => response.data)
}