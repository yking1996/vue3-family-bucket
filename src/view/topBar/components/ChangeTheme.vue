<template>
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
</template>

<script setup lang="ts">
import themeSquare from "./ThemeSquare.vue"
import { themeList } from "@/types/public"

</script>

<style lang="scss" scoped>
.theme-color-pop {
    color: #fff;
}

.iconfont {
    color: #fff;
    margin-left: 18px;
    font-size: 22px;
    cursor: pointer;
    position: relative;
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

</style>