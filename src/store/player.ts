import { defineStore } from "pinia";
import API from "@/api"
import {
    GetSongUrlRes
} from "@/types/api/song"
export const usePlayerStore = defineStore('PlayerStore', {
    state: () => ({
        currentTime: 0,
        currentSong: {
            id: 0,
            url: ''
        },
        ifPlaying: false,
    }),
    getters: {

    },
    actions: {
        setCurrentTime(currentTime: number) {
            this.currentTime = currentTime ? currentTime : 0
        },
        setIfPlaying(ifPlaying: boolean) {
            this.ifPlaying = ifPlaying
        },
        async getSongUrlData(id: number, level?: string) {
            try {
                let params = {
                    id,
                    level: level ? level : 'standard'
                }
                let res: GetSongUrlRes = await API.song.getSongUrl(params)
                const songUrlDetailInfo = res.data[0]
                if (res.code === 200 && songUrlDetailInfo.code === 200) {
                    const standbyUrl =  `https://music.163.com/song/media/outer/url?id=${id}.mp3`
                    this.currentSong.url = songUrlDetailInfo.url ? songUrlDetailInfo.url : standbyUrl
                    this.currentSong.id = songUrlDetailInfo.id
                    this.ifPlaying = true
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})