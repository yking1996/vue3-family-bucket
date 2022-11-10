<template>
    <div class="main-menu">
        <i class="iconfont icon-previous-page"></i>
        <i class="iconfont icon-next-page"></i>
        <el-input
            v-model="searchValue"
            :prefix-icon="Search"
            placeholder="搜索"
            ref="buttonRef"
            @focus="popVisible = true"
            @blur="popVisible = false"
        />
        <el-popover
            :virtual-ref="buttonRef"
            :visible="popVisible"
            trigger="focus"
            :show-arrow="false"
            virtual-triggering
            :width="354"
            :offset="3"
            popper-class="search-popper"
        >
            <el-scrollbar height="450px" v-show="!searchValue">
                <HotSearchCharts :pop-change="popVisible" @on-row-click="getSearchWord" />
            </el-scrollbar>
            <SearchPreview v-show="searchValue" :search-word="searchValue" />
        </el-popover>
    </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import HotSearchCharts from './components/HotSearchCharts.vue'
import SearchPreview from './components/SearchPreview.vue'
const searchValue = ref('')
const buttonRef = ref()
const popVisible = ref(false)

const getSearchWord = (searchWord: string) => {
    searchValue.value = searchWord
}
</script>

<style lang="scss" scoped>
.main-menu {
    display: flex;
    align-items: center;
    padding-left: 80px;

    .iconfont {
        color: #575757;
        font-size: 30px;
        margin-right: 8px;
        position: relative;
        opacity: 0.15;
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
        background-color: rgba(#575757, 0.1);
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
        color: rgba(#fff, 0.4);
    }
}
</style>
<style lang="scss">
.search-popper {
    padding: 0 0 10px 0 !important;
    border-radius: 8px !important;
}
</style>
