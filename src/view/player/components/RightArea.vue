<template>
    <div class="right-area">
        <el-popover placement="top"
            :width="30"
            trigger="hover"
            popper-class="volume-popover">
            <template #reference>
                <i class="iconfont"
                    :class="currentVolume === 0 ? 'icon-mute' : 'icon-volume-ctrl'"
                    @click="controlMute"></i>
            </template>
            <div class="volume-slider">
                <el-slider v-model="currentVolume"
                    :show-tooltip="false"
                    vertical
                    height="80px" />
            </div>
        </el-popover>

        <i class="iconfont icon-playlist"></i>
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from "@/store/player"
import { storeToRefs } from 'pinia'
const PlayerStore = usePlayerStore()
const { currentVolume } = storeToRefs(PlayerStore)
const controlMute = () => {
    currentVolume.value = currentVolume.value === 0 ? 100 : 0
}
</script>

<style lang="scss" scoped>
.right-area {
    width: 428px;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 12px;

    i {
        line-height: 1;
        cursor: pointer;
    }

    i+i {
        margin-left: 16px;
    }

    .icon-volume-ctrl,
    .icon-mute {
        font-size: 22px;
    }
}

.volume-slider {
    color: #fff;

    .el-slider {
        --el-slider-button-size: 10px;
        --el-slider-height: 4px;
        --el-slider-button-wrapper-offset: -16px;
    }

    :deep(.el-slider__runway) {
        margin: 0 12px !important;
    }

    :deep(.el-slider__runway),
    :deep(.el-slider__button-wrapper.hover, .el-slider__button-wrapper:hover),
    :deep(.el-slider__button.hover, .el-slider__button:hover) {
        cursor: default;
    }

    :deep(.el-slider__button) {
        background-color: var(--el-slider-main-bg-color);
        transition: .05s
    }
}
</style>
<style lang="scss">
.volume-popover {
    padding: 10px 0 0 0 !important;
    min-width: initial !important;
    height: 100px;
}
</style>