import { defineStore } from "pinia";
import API from "@/api"
import {
    GetSongUrlRes,
    GetSongDetailRes,
    CurrentSong,
    SongDetail
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
        currentPlayList: [] as SongDetail[]
    }),
    getters: {
        getSingerName(): string {
            if (this.currentSong.ar.length) {
                const singerNameList = this.currentSong.ar.map((singer) => singer.name)
                return singerNameList.join(' / ')
            }
            return '未知'
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
        },
        getCurrentSongIndex(): number {
            return this.currentPlayList.findIndex(song => song.id === this.currentSong.id)
        },
        playlistFinalIndex(): number {
            return this.currentPlayList.length - 1
        },
        ifFinalSong(): boolean {
            return this.getCurrentSongIndex === this.playlistFinalIndex
        },
        ifFirstSong(): boolean {
            return this.getCurrentSongIndex === 0
        },
        onlyOneSong(): boolean {
            return this.currentPlayList.length === 1
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
            this.ifPlaying = false
            this.currentSong.url = ''
        },
        initCurrentSong() {
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
        },
        goPlayNext() {
            if (this.onlyOneSong) {
                return
            }
            const playIndex = this.ifFinalSong ? 0 : this.getCurrentSongIndex + 1
            this.goPlayPlaylist(playIndex)
        },
        goPlayPrevious() {
            if (this.onlyOneSong) {
                return
            }
            const playIndex = this.ifFirstSong ? this.playlistFinalIndex : this.getCurrentSongIndex - 1
            this.goPlayPlaylist(playIndex)
        },
        goPlayPlaylist(playIndex: number) {
            this.initPlayer()
            this.setSongInfoAndGetUrl(playIndex)
        },
        retryGetSongUrl() {
            //getSongUrl接口出现未知错误无法返回数据的情况，点击播放按钮重试获取url
            this.initPlayer()
            this.getSongUrlData(this.currentSong.id)
        },
        setSongInfoAndGetUrl(playIndex: number) {
            // console.log('当前列表：',this.currentPlayList);
            const song = this.currentPlayList[playIndex]
            this.currentSong.id = song.id
            this.currentSong.al = song.al
            this.currentSong.ar = song.ar
            this.currentSong.name = song.name
            this.currentSong.dt = song.dt
            this.getSongUrlData(song.id)
        },
        //播放音乐
        goPlaySong(ids: number | string, mode: number = 0) {
            this.initPlayer()
            this.getSongsDetailData(ids, mode)
        },
        clearPlaylist() {
            this.currentPlayList = []
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
                    this.ifPlaying = true
                } else {
                    this.initPlayer()
                }
            } catch (error) {
                ElMessage.error('未知错误请点击播放按钮重试或更换歌单')
                console.log(error);
            }
        },
        //获取歌曲详情 mode: 0-append  1-replace list 
        async getSongsDetailData(ids: string | number, mode: number = 0) {
            try {
                let params = { ids }
                let res: GetSongDetailRes = await API.song.getSongDetail(params)
                if (res.code === 200) {
                    mode === 1 ? this.clearPlaylist() : ''
                    this.currentPlayList = this.currentPlayList.concat(res.songs);
                    //append类型播放最后一首，replace类型播放第一首
                    let playIndex = mode === 1 ? 0 : this.playlistFinalIndex
                    this.setSongInfoAndGetUrl(playIndex)
                }
            } catch (error) {
                console.log(error);
            }
        },
    }
})