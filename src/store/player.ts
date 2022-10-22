import { defineStore } from "pinia";
import API from "@/api"
import {
    GetSongUrlRes,
    GetSongDetailRes,
    CurrentSong
} from "@/types/api/song"

export const usePlayerStore = defineStore('PlayerStore', {
    state: () => ({
        currentTime: 0,
        currentSong: {
            id: 0,
            url: '',
            al: {
                id: 0,
                name: '',
                picUrl: '',
                tns: [],
                pic_str: '',
                pic: 0
            },
            ar: [],
            name: '',
            dt: 0
        } as CurrentSong,
        ifPlaying: false,
    }),
    getters: {
        getSingerName(): string {
            if (this.currentSong.ar.length) {
                const singerNameList = this.currentSong.ar.map((singer) => singer.name)
                return singerNameList.join(',')
            } else {
                return '未知'
            }
        },
        getAlubmCover(): string {
            return this.currentSong.al.picUrl ? this.currentSong.al.picUrl : new URL(`../assets/img/defCover.png`, import.meta.url).href;
        }
    },
    actions: {
        setCurrentTime(currentTime: number) {
            this.currentTime = currentTime ? currentTime : 0
        },
        setIfPlaying(ifPlaying: boolean) {
            this.ifPlaying = ifPlaying
        },
        //获取歌曲url
        async getSongUrlData(id: number, level?: string) {
            try {
                let params = {
                    id,
                    level: level ? level : 'standard'
                }
                let res: GetSongUrlRes = await API.song.getSongUrl(params)
                const songUrlDetailInfo = res.data[0]
                const standbyUrl = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
                if (res.code === 200 && songUrlDetailInfo.code === 200) {
                    this.currentSong.url = songUrlDetailInfo.url ? songUrlDetailInfo.url : standbyUrl
                } else {
                    this.currentSong.url = standbyUrl
                }
                this.currentSong.id = songUrlDetailInfo.id
                this.ifPlaying = true
            } catch (error) {
                console.log(error);
            }
        },
        //获取单首歌曲详情
        async getSingleSongDetailData(ids: number) {
            try {
                let params = { ids }
                let res: GetSongDetailRes = await API.song.getSongDetail(params)
                if (res.code === 200) {
                    const songDetail = res.songs[0]
                    this.currentSong.al = songDetail.al
                    this.currentSong.ar = songDetail.ar
                    this.currentSong.name = songDetail.name
                    this.currentSong.dt = songDetail.dt
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})