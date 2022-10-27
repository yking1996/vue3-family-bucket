import NP from "number-precision"
NP.enableBoundaryChecking(false)//控制台不提示数值转换整数越界，结果不精确的warnlog
import { Ar } from "@/types/api/song"
export const formatMusicTime = (time: number) => {
    const MsTurnSecond = NP.divide(time, 1000)
    let minute: number | string = Math.floor(NP.divide(MsTurnSecond, 60))
    let second: number | string = Math.floor(MsTurnSecond - Math.floor(NP.divide(MsTurnSecond, 60)) * 60)
    minute = minute < 10 ? `0${minute}` : `${minute}`
    second = second < 10 ? `0${second}` : `${second}`
    return `${minute}:${second}`
}

export const formatSinger = (singerList: Ar[]) => {
    if (singerList.length) {
        const singerNameList = singerList.map((singer) => singer.name)
        return singerNameList.join(' / ')
    }
    return '未知'
}