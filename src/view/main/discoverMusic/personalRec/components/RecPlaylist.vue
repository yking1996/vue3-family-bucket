<template>
    <div class="rec-song-list">
        <BaseTitle title="推荐歌单"
            icon="icon-arrow-right" />
        <el-skeleton :loading="skeletonLoading"
            animated>
            <template #template>
                <div class="song-List-container">
                    <el-skeleton-item variant="image"
                        v-for="item in 10"
                        class="ske-image" />
                </div>
            </template>
            <template #default>
                <div class="song-List-container">
                    <BaseRecPlaylist v-for="item in recPlaylist"
                        :key="item.id"
                        :playListItem="item"
                        @on-detail="goDetail"
                        @on-play="goPlay" />
                </div>
            </template>
        </el-skeleton>
    </div>
</template>

<script setup lang="ts">
import API from "@/api"
import { PersonalizedRes, PersonalizedResListItem } from "@/types/layout/discoverMusic"
import { PlaylistDetail, Tracks, PlaylistDetailRes, TrackIds } from "@/types/layout/playlist"
import { usePlayerStore } from "@/store/player"
const recPlaylist = ref<PersonalizedResListItem[]>([])
const PlayerStore = usePlayerStore()
const getPersonalizedData = async () => {
    let params = {
        limit: 10
    }
    let res: PersonalizedRes = await API.discoverMusic.getPersonalized(params)
    recPlaylist.value = res.result
    skeletonLoading.value = false
}
getPersonalizedData()

const goDetail = (id: number) => {
}
const skeletonLoading = ref(true)
const getPlaylistDetailData = async (id: number) => {
    try {
        let params = { id }
        let res: PlaylistDetailRes = await API.playlist.getPlaylistDetail(params)
        if (res.code === 200) {
            let tracksIdList = res.playlist.trackIds
            let ids = tracksIdList.map((song) => song.id).join(',')
            PlayerStore.goPlaySong(ids, 1)
        }
    } catch (error) {
        console.log(error);
    }
}

const goPlay = (id: number) => {
    getPlaylistDetailData(id)
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

    .ske-image {
        width: 196px;
        height: 196px;
        margin-bottom: 20px;
        margin-right: 18px;
    }

    .ske-image:nth-child(5n) {
        margin-right: 0;
    }
}

.base-rec-song-list:nth-child(5n) {
    margin-right: 0;
}
</style>