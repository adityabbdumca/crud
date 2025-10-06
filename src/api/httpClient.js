import axios from 'axios';

export const httpClient = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})
export const END_POINT = '/student/students'

// export const getStudents = async()=>{
//     const {data} =await httpClient.get(END_POINT)
//     return data
// }








