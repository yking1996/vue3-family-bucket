<template>
    <div class="banner-container">
        <el-carousel :interval="5000"
            ref="carouselRef"
            type="card"
            height="200px">
            <el-carousel-item v-for="item in banners"
                :key="item.url">
                <img class="item-img" :src="item.imageUrl">
                <!-- 目前数据中只发现red与blue，防止存在额外的titleColor -->
                <span :class="`title-${item.titleColor === 'red' ? 'red' : 'blue'}`"
                    class="type-title">{{item.typeTitle}}</span>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import API from "@/api"
import { BannerRes, Banner } from "@/types/layout/discoverMusic"
import { CarouselInstance } from "element-plus"
const banners = ref<Banner[]>([])
const carouselRef = ref<CarouselInstance>()

const getBannersData = async () => {
    let params = {
        type: 0
    }
    let res: BannerRes = await API.discoverMusic.getBanners(params)
    banners.value = res.banners
    //防止获取banners列表后第一页无数据
    carouselRef.value!.next()
}
getBannersData()
</script>

<style lang="scss" scoped>
.banner-container {
    width: 100%;
    height: 250px;
    padding: 15px 0 0;

    :deep(.el-carousel__button) {
        width: 6px;
        height: 6px;
        border-radius: 50%;
    }

    :deep(.el-carousel__indicator.is-active button) {
        background-color: var(--el-color-primary);
    }

    :deep(.el-carousel__item--card) {
        border-radius: 8px;
    }

    .title-blue {
        background-color: #4A79CC;
    }

    .title-red {
        background-color: #CC4A4A;
    }
    .item-img {
        height: 100%;
    }

    .type-title {
        position: absolute;
        right: 0;
        bottom: 0;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 8px;
        color: #fff;
        padding: 3px 10px;
        font-size: 12px;
    }
}
</style>