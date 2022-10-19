<template>
    <div class="official-charts">
        <BaseTitle title="官方榜" />
        <div>
            <ChartsUnit v-for="id in idGroup"
                :playlistId="id" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ChartsUnit from "./ChartsUnit.vue"
import API from "@/api"
import { AllTopListRes } from "@/types/layout/discoverMusic"
const idGroup = reactive<number[]>([])
const getTopListData = async () => {
    try {
        let res: AllTopListRes = await API.discoverMusic.getTopList()
        //官方榜的内容是前4个榜单
        let tempList = res.list.splice(0, 4);
        for (const item of tempList) {
            idGroup.push(item.id)
        }
    } catch (error) {
        console.log(error);
    }
}
onBeforeMount(async () => {
    await getTopListData()
})

</script>

<style lang="scss" scoped>
.official-charts {}
</style>