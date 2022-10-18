import request from "@/utils/request"
import GeneralApi from "@/api/general"
import DiscoverMusicApi from "@/api/discoverMusic"
import PlaylistApi from "@/api/playlist"

const defHost = import.meta.env.VITE_BASE_API

const API = {
    general: new GeneralApi({ host: defHost }, request),
    discoverMusic: new DiscoverMusicApi({ host: defHost }, request),
    playlist: new PlaylistApi({ host: defHost }, request),
}
export default API