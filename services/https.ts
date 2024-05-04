import { IContact } from "@/app/(default)/contact/page"
import axios from "axios"
import endpoints from "./endpoints"

class http {
    httpContactPage = async(data: IContact)=>{
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${endpoints.CREATE}`, data)
            return res.data
        } catch (error) {
            throw error
        }
    }
}

export default new http