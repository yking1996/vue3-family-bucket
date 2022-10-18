<template>
    <div class="rec-song-list">
        <BaseTitle title="推荐歌单"
            icon="icon-arrow-right" />
        <div class="song-List-container">
            <BaseRecSongList v-for="item in recSongList"
                :key="item.id"
                :songListItem="item"
                @on-detail="goDetail"
                @on-play="goPlay" />
        </div>
    </div>
</template>

<script setup lang="ts">
import API from "@/api"
import { PersonalizedRes, PersonalizedResListItem } from "@/types/layout/discoverMusic"
const recSongList = ref<PersonalizedResListItem[]>([])
const getPersonalizedData = async () => {
    let params = {
        limit: 10
    }
    let res: PersonalizedRes = await API.discoverMusic.getPersonalized(params)
    recSongList.value = res.result
}
getPersonalizedData()

const goDetail = () => {

}

const goPlay = () => {
}
</script>

<style lang="scss" scoped>
.rec-song-list {
    width: 100%;
    height: 500px;
}

.song-List-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.base-rec-song-list:nth-child(5n) {
    margin-right: 0;
}
</style>