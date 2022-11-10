<template>
    <div class="right-area">
        <el-popover placement="top" :width="30" trigger="hover" popper-class="volume-popover">
            <template #reference>
                <i
                    class="iconfont"
                    :class="currentVolume === 0 ? 'icon-mute' : 'icon-volume-ctrl'"
                    @click="controlMute"
                ></i>
            </template>
            <div class="volume-slider">
                <el-slider v-model="currentVolume" :show-tooltip="false" vertical height="80px" />
            </div>
        </el-popover>
        <i class="iconfont icon-playlist" @click="drawerVisible = !drawerVisible"></i>
        <div class="drawer-container">
            <el-drawer
                v-model="drawerVisible"
                :with-header="false"
                custom-class="playlist-drawer"
                :size="420"
            >
                <div class="drawer-header">
                    <span>当前播放</span>
                    <div class="header-ctrl">
                        <span>总{{ currentPlayList.length }}首</span>
                        <div>
                            <i class="iconfont icon-add-file">
                                <span>收藏全部</span>
                            </i>
                            <span @click="onClearPlaylist">清空列表</span>
                        </div>
                    </div>
                </div>
                <div class="drawer-content">
                    <el-scrollbar max-height="689px">
                        <div
                            v-for="(song, songIndex) in currentPlayList"
                            :key="song.id"
                            class="playlist-item"
                            :class="{ isPlaying: currentSong.id === song.id }"
                            @dblclick="onPlaySelectedSong(songIndex)"
                        >
                            <div class="item-song-name">
                                <i
                                    v-if="currentSong.id === song.id"
                                    class="iconfont icon-right-arrow"
                                ></i>
                                <div>
                                    <span>{{ song.name }}</span>
                                    <span v-if="song.alia?.length">({{ song.alia[0] }})</span>
                                </div>
                                <i class="iconfont icon-high-quality"></i>
                                <i class="iconfont icon-mv"></i>
                            </div>
                            <div class="item-singer">{{ formatSinger(song.ar) }}</div>
                            <i class="iconfont icon-link"></i>
                            <div class="item-duration">{{ formatMusicTime(song.dt) }}</div>
                        </div>
                    </el-scrollbar>
                </div>
            </el-drawer>
        </div>
    </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { storeToRefs } from 'pinia'
import { formatMusicTime, formatSinger } from '@/utils'
const PlayerStore = usePlayerStore()
const { currentVolume, currentPlayList, currentSong } = storeToRefs(PlayerStore)
const controlMute = () => {
    currentVolume.value = currentVolume.value === 0 ? 100 : 0
}
const drawerVisible = ref(false)

const onClearPlaylist = () => {
    PlayerStore.clearPlaylist()
    PlayerStore.initCurrentSong()
    PlayerStore.initPlayer()
}
const onPlaySelectedSong = (songIndex: number) => {
    PlayerStore.goPlayPlaylist(songIndex)
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

    > i {
        line-height: 1;
        cursor: pointer;
    }

    > i + i {
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
        transition: 0.05s;
    }
}

.drawer-container {
    :deep(.playlist-drawer) {
        box-shadow: -2px 0px 4px 0px rgb(0 0 0 / 10%) !important;
        right: calc((100% - 1320px) / 2) !important;
        top: 50% !important;
        transform: translateY(-394px) !important;
        height: 779px !important;
    }

    :deep(.el-drawer__body) {
        padding: 0;
    }

    :deep(.el-overlay) {
        background-color: transparent;
    }

    .drawer-header {
        padding: 20px 0 12px;
        margin: 0 20px;
        border-bottom: 1px solid #f3f3f3;
        width: calc(100% - 40px);
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;

        > span {
            font-size: 20px;
            font-family: '黑体';
            font-weight: bold;
            color: #333333;
        }

        .header-ctrl {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;

            > span {
                color: #cccccc;
                font-size: 12px;
                line-height: 1;
            }

            > div {
                line-height: 1;

                span {
                    font-size: 14px;
                }

                > span {
                    color: #507daf;
                    cursor: pointer;
                }

                i {
                    font-size: 20px;
                    cursor: pointer;

                    span {
                        padding: 0 18px 0 4px;
                    }
                }
            }
        }
    }

    .drawer-content {
        width: 100%;
        height: calc(100% - 90px);
    }

    .playlist-item {
        width: calc(100% - 5px);
        height: 34px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        user-select: none;

        .text-ellipsis {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .item-song-name {
            display: flex;
            width: 192px;
            align-items: center;
            font-size: 12px;
            position: relative;

            > div {
                max-width: 130px;
                display: flex;

                span {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                span:first-child {
                    flex-shrink: 0;
                    max-width: 100%;
                }

                span:nth-child(2) {
                    color: #d3d3d3;
                }
            }

            .iconfont {
                color: $theme-primary;
                margin-left: 5px;
            }

            .icon-high-quality {
                font-size: 22px;
            }

            .icon-mv {
                font-size: 20px;
                cursor: pointer;
            }

            .icon-right-arrow {
                position: absolute;
                left: -23px;
                top: 50%;
                font-size: 12px;
                transform: translateY(-50%);
            }
        }

        .item-singer {
            width: 95px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 12px;
            padding: 0 2px 0 3px;
        }

        .icon-link {
            width: 22px;
        }

        .item-duration {
            width: calc(100% - 309px);
            font-size: 12px;
            padding-left: 9px;
            color: #d3d3d3;
        }
    }

    .playlist-item:nth-child(2n + 1) {
        background-color: #fafafa;
    }
    .playlist-item:hover {
        background-color: #f5f5f5;
    }

    .isPlaying {
        .item-song-name {
            > div {
                span:first-child {
                    color: $theme-primary;
                }
            }
        }

        .item-singer {
            color: $theme-primary;
        }
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
