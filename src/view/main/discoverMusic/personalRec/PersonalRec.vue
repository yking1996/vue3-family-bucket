<template>
    <div class="personal-rec">
        <DisplayBanners />
        <RecPlaylist />
    </div>
</template>

<script setup lang="ts">
import DisplayBanners from "./components/Banners.vue"
import RecPlaylist from "./components/RecPlaylist.vue"
</script>

<style lang="scss" scoped>
.personal-rec {
    width: 100%;
    padding: 0 30px;
    height: 100%;
}

</style>