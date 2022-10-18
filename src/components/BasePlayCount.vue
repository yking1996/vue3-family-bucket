<template>
    <div class="base-play-count">
        <i class="iconfont icon-play-btn"></i>
        <span>{{showPlayCount}}</span>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    playCount: number
}>(), {
    playCount: 0
})
const showPlayCount = computed(() => {
    if (props.playCount > 10000) {
        return Math.floor(props.playCount / 10000) + '万'
    }
    return props.playCount
})

</script>

<style lang="scss" scoped>
.base-play-count {
    position: absolute;
    right: 6px;
    top: 1px;
    color: #fff;
    font-size: 12px;
    i {
        font-size: 12px;
        margin-right: 4px;
    }
}
</style>