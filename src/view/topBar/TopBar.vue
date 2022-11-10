<template>
    <div class="topBar">
        <div class="flex items-center">
            <i class="iconfont icon-xingqiu rounded-full"></i>
            <span class="text-white text-xl pl-1.5">Cloud Music</span>
        </div>
        <MainMenu />
        <div class="other-menu">
            <ChangeTheme />
            <i
                :class="icon.icon"
                class="iconfont"
                v-for="icon in otherMenuList"
                :key="icon.icon"
            ></i>
        </div>
    </div>
</template>

<script setup lang="ts">
import MainMenu from './MainMenu.vue'
import ChangeTheme from './components/ChangeTheme.vue'
import { otherMenuList } from '@/types/layout/topBar'
</script>

<style lang="scss" scoped>
.topBar {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-image: linear-gradient(
        to right,
        $theme-primary-light-3,
        $theme-primary-light-1,
        $theme-primary-light-3,
        $theme-primary-light-5,
        $theme-primary-light-3
    );
}

.other-menu {
    margin-left: auto;
    display: flex;
    align-items: center;

    .iconfont {
        color: #fff;
        margin-left: 18px;
        font-size: 22px;
        cursor: pointer;
        position: relative;
    }

    .icon-email {
        font-size: 24px;
    }

    .icon-mini-mode,
    .icon-vertical_line {
        margin-left: 8px;
    }

    .icon-close-window,
    .icon-maximize {
        font-size: 18px;
    }
}

.icon-xingqiu {
    font-size: 28px;
    color: $theme-primary;
    background-color: rgba(#fff, 0.8);
    height: 28px;
    line-height: 1.1;
    cursor: pointer;
}
</style>
