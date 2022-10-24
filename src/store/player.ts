import { defineStore } from "pinia";
import API from "@/api"
import {
    GetSongUrlRes,
    GetSongDetailRes,
    CurrentSong
} from "@/types/api/song"
import NP from "number-precision"
import { ElMessage } from 'element-plus'

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
        currentVolume: 100,
    }),
    getters: {
        getSingerName(): string {
            if (this.currentSong.ar.length) {
                const singerNameList = this.currentSong.ar.map((singer) => singer.name)
                return singerNameList.join(' / ')
            }
            return '未知歌手'
        },
        getAlubmCover(): string {
            const coverUrl = this.currentSong.al.picUrl
            return coverUrl ? coverUrl : new URL(`../assets/img/defCover.png`, import.meta.url).href;
        },
        getProgressPercent(): number {
            if (this.currentSong.dt) {
                return NP.times(NP.divide(this.currentTime, this.currentSong.dt), 100)
            }
            return 0
        },
        getAudioCurrentVolume(): number {
            return NP.divide(this.currentVolume, 100)
        }
    },
    actions: {
        setCurrentTime(currentTime: number) {
            //传入的currentTime将以ms为单位，保持和接口返回的单位同步
            this.currentTime = currentTime ? currentTime : 0
        },
        setIfPlaying(ifPlaying: boolean) {
            this.ifPlaying = ifPlaying
        },
        initPlayer() {
            this.currentTime = 0
            this.currentSong = {
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
            }
            this.ifPlaying = false
        },
        goPlaySingle(id: number, level?: string) {
            this.initPlayer()//重置播放状态
            this.getSongUrlData(id, level)
            this.getSingleDetailData(id)
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
                } else if (songUrlDetailInfo.code === 403) {
                    this.currentSong.url = standbyUrl
                } else {
                    //目前出现的情况有code为-110
                    ElMessage.error('此歌曲暂不支持播放')
                }
                if (this.currentSong.url) {
                    this.currentSong.id = songUrlDetailInfo.id
                    this.ifPlaying = true
                } else {
                    this.initPlayer()
                }
            } catch (error) {
                console.log(error);
            }
        },
        //获取单首歌曲详情
        async getSingleDetailData(ids: number) {
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