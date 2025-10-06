import { END_POINT, httpClient } from "./httpClient"

export const addStudent =async(student)=>{
    const {data} = await httpClient.post(END_POINT,student)
    return data
}

export const upDateStudent = async(Id,student)=>{
    const {data} = await httpClient.put(`${END_POINT}/${Id}`,student)
    return data
}

export const deleteStudent = async(id)=>{
    const {data} = await httpClient.delete(`${END_POINT}/${id}`)
    return data
}
