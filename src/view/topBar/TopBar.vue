<template>
    <div class="topBar">
        <div class="flex items-center">
            <i class="iconfont icon-xingqiu rounded-full"></i>
            <span class="text-white text-xl pl-1.5">Cloud Music</span>
        </div>
        <div class="
                main-menu">
            <i class="iconfont icon-previous-page"></i>
            <i class="iconfont icon-next-page"></i>
            <el-input v-model="searchValue"
                :prefix-icon="Search"
                placeholder="搜索">
            </el-input>
        </div>
        <div class="other-menu">
            <!-- <i class="iconfont icon-guest"></i> -->
            <el-popover placement="bottom"
                :width="340"
                trigger="click"
                :show-arrow="false"
                popper-class="theme-color-pop">
                <template #reference>
                    <i class="iconfont icon-theme-color"></i>
                </template>
                <div class="theme-pop-content">
                    <span>主题切换</span>
                    <div>
                        <theme-square v-for="square in themeList"
                            :theme="square"
                            :key="square.key" />
                    </div>
                </div>
            </el-popover>
            <i :class="icon.icon"
                class="iconfont"
                v-for="icon in otherMenuList"
                :key="icon.icon"></i>
        </div>
        <div class="AAA"></div>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import themeSquare from "./components/ThemeSquare.vue"
import { themeList } from "@/types/public"
import { otherMenuList } from "@/types/layout/topBar"

const searchValue = ref('')
const onChangeTheme = (type: number) => {
    if (type === 1) {
        document.documentElement.setAttribute('theme', 'pink')
        document.querySelector("html")!.className = 'pink'
    } else {
        document.documentElement.setAttribute('theme', 'blue')
        document.querySelector("html")!.className = 'blue'
    }
}
</script>

<style lang="scss" scoped>
.theme-color-pop {
    color: #fff;
}

.topBar {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-image: linear-gradient(to right,
            $theme-primary-light-3,
            $theme-primary-light-1,
            $theme-primary-light-3,
            $theme-primary-light-5,
            $theme-primary-light-3,
        );
}

.main-menu {
    display: flex;
    align-items: center;
    padding-left: 80px;

    .iconfont {
        color: #575757;
        font-size: 30px;
        margin-right: 8px;
        position: relative;
        opacity: .15;
        z-index: 1;
        cursor: pointer;
    }

    .iconfont::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 15px;
        background-color: #fff;
        z-index: -1;
    }

    :deep(.el-input__wrapper) {
        border-radius: 24px;
        background-color: rgba(#575757, .1);
        box-shadow: none;
    }

    :deep(.el-input__prefix) {
        color: #fff;
        font-size: 18px;
    }

    :deep(.el-input__inner) {
        color: #fff;
    }

    :deep(.el-input__inner::placeholder) {
        color: rgba(#fff, .4);
    }
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

.theme-pop-content {
    >span {
        padding-left: 11px;
        font-size: 16px;
        font-weight: bold;
    }

    >div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 12px;
        background-color: #fff;

        .theme-square:nth-child(3n) {
            margin-right: 0;
        }
    }
}

.icon-xingqiu {
    font-size: 28px;
    color: $theme-primary;
    background-color: rgba(#fff, .8);
    height: 28px;
    line-height: 1.1;
    cursor: pointer;
}

.AAA {
    color: #faac62;
    color: mix(#fff, #faac62, 10%);
    color: mix(#fff, #faac62, 30%);
    color: mix(#fff, #faac62, 50%);
    color: mix(#fff, #faac62, 70%);
    color: mix(#fff, #faac62, 80%);
    color: mix(#fff, #faac62, 90%);
    color: mix(#000, #faac62, 20%);
}
</style>