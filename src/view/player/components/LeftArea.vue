<template>
    <div class="left-area">
        <img :src="PlayerStore.getAlubmCover">
        <div class="text-info-container">
            <div>
                <p class="song-name"
                    :class="{'add-scroll-anim': ifNameScroll}"
                    ref="songName">
                    <span>{{currentSong.name}}</span>
                </p>
                <i class="iconfont icon-vip"
                    v-if="false"></i>
                <i class="iconfont icon-my-favorite"></i>
            </div>
            <div>
                <p class="song-name songwriter"
                    :class="{'add-scroll-anim': ifWriterScroll}"
                    ref="songwriter">
                    <span>{{PlayerStore.getSingerName}}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/store/player"
import { storeToRefs } from 'pinia'
const PlayerStore = usePlayerStore()
const { currentSong } = storeToRefs(PlayerStore)
const testName = '七里香'
const testWriter = '周杰伦'
const testName1 = '七里香11111111111111111112222222222222222222223333333333333'
const testWriter1 = '周杰伦11111111111111122222222222222223333333333'
const songName = ref<HTMLElement>()
const songwriter = ref<HTMLElement>()
const ifNameScroll = ref(false)
const ifWriterScroll = ref(false)

onMounted(() => {
    console.log(songName.value!.clientWidth);
    ifNameScroll.value = songName.value!.clientWidth === 150 ? true : false;
    ifWriterScroll.value = songwriter.value!.clientWidth === 200 ? true : false;
})
</script>

<style lang="scss" scoped>
.left-area {
    width: 428px;
    display: flex;

    >img {
        width: 48px;
        height: 48px;
        border-radius: 4px;
    }
}

.text-info-container {
    width: 100%;
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    >div {
        width: 100%;
        display: flex;
        align-items: center;
    }

    .song-name {
        max-width: 150px;
        overflow: hidden;
        margin-right: 8px;
        line-height: 1;

        span {
            display: inline-block;
            font-size: 15px;
            white-space: nowrap;
            position: relative;
        }
    }

    .add-scroll-anim:hover {
        span {
            animation: wordsLoop 3s linear 1 normal;
        }
    }

    .icon-my-favorite {
        padding-top: 4px;
        font-size: 20px;
        color: #6F6F6F;
        line-height: 1;
        cursor: pointer;
    }

    .songwriter {
        max-width: 200px;

        span {
            font-size: 13px;
            color: #A0A0A0;
        }
    }
}

@keyframes wordsLoop {
    0% {
        transform: translate(0);
    }

    100% {
        transform: translate(-60%);
    }
}
</style>