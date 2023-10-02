import axios from "axios"

const url:string = "http://localhost:2030/api/v1"

export const createBeg = async(data: any) =>{
    try {
        const config:any= {
            "content-type": "multipart/form-data"
        }
        return await axios.post(`${url}/register`,data, config).then((res:any)=>{
            // console.log("first", res.data.data)
            return res.data.data
        })
    } catch (error: any) {
        console.log(error);
    }
}
export const getAllAbeg = async()=>{
    try {
        return await axios.get(`/${url}/get-all`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
      console.log(error)  
    }
}
export const getOneAbeg = async(userID: string)=>{
    try {
        return await axios.get(`/${url}/${userID}/get-all`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
      console.log(error)  
    }
}
export const deleteAbeg = async(userID: string)=>{
    try {
        return await axios.get(`/${url}/${userID}/get-all`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
      console.log(error)  
    }
}
export const updateAbeg = async(userID: string)=>{
    try {
        return await axios.get(`/${url}/${userID}/get-all`).then((res:any)=>{
            return res.data.data
        })
    } catch (error) {
      console.log(error)  
    }
}