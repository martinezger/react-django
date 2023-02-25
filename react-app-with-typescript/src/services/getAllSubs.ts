import axios from "axios"
import { Sub, SubsResponseFromApi } from "../types"


export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiSubs)
}

export const fetchSubs = (): Promise<SubsResponseFromApi> => {
    return axios.get('http://localhost:8000/subs/').then(response => response.data)
  }


export const mapFromApiSubs = (apiResponse: SubsResponseFromApi):
  
  Array<Sub> => {
    return apiResponse.results.map(subFromApi => {
      const {
        nick,
        profileUrl,
        description,
        createdAt:followerSince,
      } = subFromApi

      return {
        nick,
        profileUrl,
        description,
        followerSince,

      }
    })
  }
