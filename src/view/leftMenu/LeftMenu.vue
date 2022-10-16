<template>
    <div class="left-menu">
        <el-menu :default-openeds="groupDefOpen"
            router
            :default-active="menuGroup[0].url">
            <el-menu-item :index="item.url"
                v-for="item in menuGroup"
                :key="item.url">
                <span>{{item.name}}</span>
            </el-menu-item>
            <el-sub-menu v-for="(group, gIndex) in myMusicGroup"
                :key="group.name"
                :index="`${gIndex}`">
                <template #title
                    v-if="group.name">{{group.name}}</template>
                <el-menu-item :index="item.url"
                    v-for="item in group.children"
                    :key="item.url">
                    <i class="iconfont"
                        :class="item.icon"></i>
                    <span class="pl-1">{{item.name}}</span>
                </el-menu-item>
            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { menuGroup, myMusicGroup } from "@/types/layout/leftMenu"
const groupDefOpen = Array.from({ length: myMusicGroup.length }, (v, i) => `${i}`)
</script>

<style lang="scss" scoped>
.left-menu {
    width: 200px;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    border-right: 1px solid #E1E1E1;
    padding: 12px 6px 12px 12px;

    :deep(.el-menu) {
        border-right: 0;
    }

    :deep(.el-menu-item) {
        border-right: 4px;
        font-size: 16px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 2px;
        padding-left: 8px !important;
    }

    :deep(.el-sub-menu__title:hover) {
        background-color: transparent;
    }

    :deep(.el-sub-menu__title) {
        padding-left: 8px !important;
        color: #C4C4C4;
    }

    :deep(.el-menu-item.is-active) {
        background-color: #F6F6F7
    }

    :deep(.el-sub-menu .el-menu-item) {
        min-width: auto
    }

    :deep(.el-menu-item.is-active) {
        font-size: 18px;
        font-weight: bold;
    }

    :deep(.el-sub-menu .el-menu-item.is-active) {
        font-size: 16px;
        font-weight: normal;
        color: #303133;
    }
}
</style>