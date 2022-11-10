<template>
    <div
        class="theme-square"
        :style="{ 'background-color': theme.color }"
        :themeLabel="theme.label"
        @click="onSwitchTheme(theme.name)"
    >
        <i class="iconfont icon-xingqiu"></i>
        <i v-if="PublicStore.currentTheme === theme.name" class="iconfont icon-selected"></i>
    </div>
</template>

<script setup lang="ts">
import { ThemeItem } from '@/types/public'
import { usePublicStore } from '@/store'
interface SquareProps {
    theme: ThemeItem
}
defineProps<SquareProps>()

const PublicStore = usePublicStore()

const onSwitchTheme = (themeName: string): void => {
    PublicStore.setCurrentTheme(themeName)
}
</script>

<style lang="scss" scoped>
.theme-square {
    width: 92px;
    height: 92px;
    border-radius: 8px;
    margin: 0 9px 9px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;

    .icon-xingqiu {
        font-size: 60px;
        color: rgba(#fff, 0.4);
    }
    .icon-selected {
        color: $theme-primary;
        position: absolute;
        right: -6px;
        bottom: -5px;
        font-size: 24px;
        z-index: 2;
        height: 24px;
        line-height: 1;
    }
    .icon-selected::after {
        content: '';
        width: 25px;
        height: 25px;
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
}

.theme-square::after {
    content: attr(themeLabel);
    color: #fff;
    padding-left: 8px;
    font-size: 13px;
    line-height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 20px;
    width: 92px;
    background-color: rgba(#000, 0.2);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
