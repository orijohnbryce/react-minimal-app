import axios from "axios";
import { SERVER_URL } from "./config";

export async function getAllNotes() {
    const url = SERVER_URL + "notes"
    
    try {
        const resJ = await axios.get(url)            
        // const resJ = res.json()
        console.assert(resJ.status == 200)
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }            
}


export async function getNotesPagination(pageNum, pageSize) {
    const url = SERVER_URL + "notes_pagination" + `?page_num=${pageNum}&page_size=${pageSize}`
    
    try {
        const resJ = await axios.get(url)        
        console.assert(resJ.status == 200)        
        return resJ.data
    } catch (error) {
        window.alert("Error!")
        console.log(error)
    }
}