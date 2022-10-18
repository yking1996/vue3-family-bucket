<template>
    <div class="official-charts">
        <BaseTitle title="官方榜" />
        <div>
            <ChartsUnit v-for="charts in chartsGroup"
                :chartsItem="charts" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChartsUnit from "./ChartsUnit.vue"
import API from "@/api"
import { AllTopListRes } from "@/types/layout/discoverMusic"
import { Tracks, PlaylistDetailRes, PlaylistDetail } from "@/types/layout/playlist"
const idGroup = reactive<number[]>([])
let chartsGroup = reactive<PlaylistDetail[]>([])
const getTopListData = async () => {
    try {
        let res: AllTopListRes = await API.discoverMusic.getTopList()
        console.log(res);
        //取前4个榜单作为官方榜的内容
        let tempList = res.list.splice(0, 4);
        for (const item of tempList) {
            idGroup.push(item.id)
        }
    } catch (error) {
        console.log(error);
    }
}
const useIdGetDetail = () => {
    for (const id of idGroup) {
        getPlaylistDetailData(id)
    }
}
const getPlaylistDetailData = async (id: number) => {
    try {
        let params = { id }
        let res: PlaylistDetailRes = await API.playlist.getPlaylistDetail(params)
        chartsGroup.push(res.playlist)
    } catch (error) {
        console.log(error);
    }
}
onBeforeMount(async () => {
    await getTopListData()
    useIdGetDetail()
})

</script>

<style lang="scss" scoped>
.official-charts {}
</style>