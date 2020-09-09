import { API } from "../../backend"

export const getAllCategories = () =>{
    return fetch(`${API}category/`,{
        method:"GET"
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))
}

export const getSite = (url) =>{
    return fetch(`${API}sites/?url=${url}`,{
        method:"GET",
        headers:{
            Accept:"application/json",
        }
    }).then(data=>data.json())
    .catch(err=>console.log(err))
}


export const createNewSite = data =>{
    const formData = new FormData();
    console.log(data)
    for(const name in data){
        formData.append(name,data[name])
    }
    for(const name in data){
        console.log(formData[name])
    }
    return fetch(`${API}sites/register/`,{
        method:"POST",
        body:formData
        
    })
    .then(data=>data.json())
    .catch(err=>console.log(err))
}