<template>
    <div class="middle-area">
        <div class="control-container">
            <i :class="playModeGroup[currentPlayMode]['icon']"
                class="iconfont"
                @click="changePlayMode"></i>
            <i class="iconfont icon-previous"></i>
            <i :class="ifPlaying ? 'icon-pause' : 'icon-play'"
                class="iconfont"
                @click="changePlayingStatus"></i>
            <i class="iconfont icon-next"></i>
            <i class="iconfont icon-lyric"></i>
        </div>
        <div class="progress-container">
            <span>{{ formatMusicTime(currentTime) }}</span>
            <el-slider v-model="sliderProgress"
                :show-tooltip="false"
                @input="sliderInput"
                @change="sliderChange" />
            <span>{{ formatMusicTime(currentSong.dt) }}</span>
        </div>
        <audio :src="currentSong.url"
            :autoplay="false"
            ref="audioRef"
            @timeupdate="onTimeupdate"
            style="margin-top: 20px"></audio>
    </div>
</template>

<script setup lang="ts">
import { playModeGroup } from "@/types/layout/player"
import { usePlayerStore } from "@/store/player"
import { storeToRefs } from 'pinia'
import { formatMusicTime } from "@/utils"
import { Arrayable } from "element-plus/es/utils"
import NP from "number-precision"
const PlayerStore = usePlayerStore()
const { 
    currentTime, 
    ifPlaying, 
    currentSong, 
    getProgressPercent,
    getAudioCurrentVolume } = storeToRefs(PlayerStore)
const currentPlayMode = ref(0)
const audioRef = ref<HTMLAudioElement>()
const changePlayingStatus = () => {
    PlayerStore.setIfPlaying(!PlayerStore.ifPlaying)
}
const changePlayMode = () => {
    let ifFinal = currentPlayMode.value === playModeGroup.length - 1;
    currentPlayMode.value = ifFinal ? 0 : currentPlayMode.value + 1

}
/**
 * 弃用sliderProgress的computed,改用watch监听
 * const sliderProgress = computed(() => { return getProgressPercent.value })
 * 拖拽slider会实时改变v-model: sliderProgress的值
 * 因此无法使用从store中getter获取的getProgressPercent值作为computed放在v-model上
 * computed可以set,但getter是readonly的
 */
const sliderProgress = ref(0)
const ifDragging = ref(false)
watch(getProgressPercent, (newVal) => {
    if (!ifDragging.value) {
        sliderProgress.value = newVal
    }
})
const sliderInput = () => {
    ifDragging.value = true
}
const sliderChange = (val: Arrayable<number>) => {
    ifDragging.value = false
    // val百分比: [0, 100]    val% * (歌曲时长ms=> 歌曲时长s)
    audioRef.value!.currentTime = NP.times(NP.divide((val as number), 100), NP.divide(currentSong.value.dt, 1000))
}
const onTimeupdate = () => {
    PlayerStore.setCurrentTime(NP.times(audioRef.value!.currentTime, 1000))
}
watch(ifPlaying, async (newValue, oldValue) => {
    //如果不等待dom更新,audio上的src: currentSong.url不会同步刷新
    await nextTick()
    // console.log(currentSong.value.url);
    if (currentSong.value.url) {
        newValue ? audioRef.value!.play() : audioRef.value!.pause()
    }
})
watch(getAudioCurrentVolume, newVal => {
    audioRef.value!.volume = newVal
})
</script>

<style lang="scss" scoped>
.middle-area {
    width: 440px;
    height: 100%;
}

.control-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    i+i {
        margin-left: 33px;
        line-height: 1;
    }

    i {
        cursor: pointer;
    }

    .icon-previous,
    .icon-next {
        font-size: 25px;
        color: #333333;
    }

    .icon-pause,
    .icon-play {
        font-size: 36px;
        color: #F1F1F1;
        position: relative;
        opacity: .9;
    }

    .icon-pause::after,
    .icon-play::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        background-color: #313131;
        z-index: -1;
    }

    .icon-lyric {
        font-size: 18px;
    }
}

.progress-container {
    display: flex;
    align-items: center;

    >span {
        color: #B3B3B3;
        font-size: 12px;
    }

    .el-slider {
        width: 360px;
        height: 15px;
        margin: 0 7px;
        --el-slider-button-size: 9px;
        --el-slider-height: 3px;
        --el-slider-button-wrapper-offset: -17px;
    }

    :deep(.el-slider__runway),
    :deep(.el-slider__button-wrapper.hover, .el-slider__button-wrapper:hover),
    :deep(.el-slider__button.hover, .el-slider__button:hover) {
        cursor: default;
    }

    :deep(.el-slider__button) {
        opacity: 0;
        background-color: var(--el-slider-main-bg-color);
        transition: .05s
    }

    :deep(.el-slider:hover .el-slider__button) {
        opacity: 1;
    }

    :deep(.el-slider:hover) {
        --el-slider-height: 5px;
        --el-slider-button-wrapper-offset: -16px;
    }
}
</style>