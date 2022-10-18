<template>
    <div class="discover-music">
        <div class="top-menu">
            <el-menu router
                mode="horizontal"
                :default-active="route.path">
                <el-menu-item :index="item.url"
                    v-for="item in topMenuGroup"
                    :key="item.url">
                    <span>{{item.name}}</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { topMenuGroup } from "@/types/layout/discoverMusic"
import { useRoute } from "vue-router"
const route = useRoute()

</script>

<style lang="scss" scoped>
.discover-music {
    width: 100%;
    height: 100%;
    padding-top: 20px;
}

.top-menu {
    width: 100%;
    height: 40px;
    padding: 0 20px;

    :deep(.el-menu) {
        border-bottom: 0;
    }

    :deep(.el-menu-item) {
        border-right: 4px;
        font-size: 16px;
        height: 36px;
        line-height: 36px;
        margin-bottom: 2px;
        padding: 0;
        margin: 0 10px;
    }

    :deep(.el-menu-item.is-active) {
        font-size: 20px;
        font-weight: bold;
        color: #373737 !important;
    }

    :deep(.el-menu-item:hover) {
        background-color: transparent;
    }

    :deep(.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover) {
        background-color: transparent;
    }
}

.main-content {
    width: 100%;
    height: calc(100% - 40px);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 6px;
    }

    //滑块
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgb(224, 224, 224);
        box-shadow: inset 0 0 6px rgb(224, 224, 224);
        background-color: #e0e0e0;
    }

    //外层轨道
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgb(255, 255, 255);
        box-shadow: inset 0 0 6px rgb(255, 255, 255);
        background-color: #fff;
    }
}
</style>