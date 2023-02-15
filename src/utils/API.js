const URL_PREFIX='http://localhost:3001'

// const URL_PREFIX='https://resolution-solution.herokuapp.com'

const API = {
    login: (userObj)=>{
        return fetch(`${URL_PREFIX}/api/users/login`,{
            method:'POST',
            body:JSON.stringify(userObj),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(res=>res.json())
    },
    getUserResolutions: (userId)=>{
        return fetch(`${URL_PREFIX}/api/users/${userId}`).then(res=>res.json())
    },
    getUserFromToken: (token)=>{
        return fetch(`${URL_PREFIX}/api/users/getuserfromtoken`,{
            method:'GET',
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    createResolution:(resolutionObj,token)=>{
        return fetch(`${URL_PREFIX}/api/resolutions`,{
            method:'POST',
            body:JSON.stringify(resolutionObj),
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res=>res.json())
    },
    deleteResolution:(resolutionId, token)=>{
        return fetch(`${URL_PREFIX}/api/resolutions/${resolutionId}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(res=>res.json())
    }
}

export default API