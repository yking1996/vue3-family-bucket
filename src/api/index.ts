import request from "@/utils/request"
import GeneralApi from "@/api/general"

const defHost = import.meta.env.VITE_BASE_API

const API = {
    general: new GeneralApi({ host: defHost }, request)
}
export default API