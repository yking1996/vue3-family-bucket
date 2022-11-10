<template>
    <div class="music-player">
        <LeftArea />
        <MiddleArea />
        <RightArea />
    </div>
</template>

<script setup lang="ts">
import LeftArea from './components/LeftArea.vue'
import MiddleArea from './components/MiddleArea.vue'
import RightArea from './components/RightArea.vue'
</script>

<style lang="scss" scoped>
.music-player {
    width: 100%;
    height: 70px;
    padding: 10px 12px;
    display: flex;
    border-top: #e1e1e1 1px solid;
    justify-content: space-between;
    position: relative;
}
</style>
