export interface Sub {
    nick: string
    profileUrl: string
    description: string
    followerSince?: string
  } 

export type SubResponseFromApi = {
    nick: string
    profileUrl: string
    description: string
    createdAt: string
    updatedAt: string
}

export type SubsResponseFromApi = {
  count?: number
  next?: string
  previous?: string
  results:Array<SubResponseFromApi>
}

export type PostSubResponseFromApi = {
  url: string
  nick: string
  profileUrl: string
  description: string
  createdAt: string
  updatedAt: string
}
