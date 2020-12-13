import {API} from "../../backend"

export const getUserWebsite = (userid)=>{
    return fetch(`${API}sites/?user=${userid}`,{
        method:"GET"        
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))
}
export const deleteUserWebsite = (id,token)=>{
    return fetch(`${API}sites/${id}/`,{
        method:"DELETE",
        headers:{

            Authorization: `Token ${token}`
            
        },     
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))
}