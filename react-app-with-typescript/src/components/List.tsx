import React from "react"
import { Sub } from "../types"

interface Props {
    subs: Array<Sub>
}


export default function List({subs}: Props){
    return (
        <ul>
        {
          subs.map( sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.profileUrl} alt={`Avatar for ${sub.nick}`}/>
                <p>{sub.description.substring(0, 100)}</p>
                <p>Follower since: <small>{sub.followerSince}</small></p>
              </li>
            )
          })
        }
      </ul>
    )
};