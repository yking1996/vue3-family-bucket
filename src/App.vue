<script setup lang="ts">
import homePage from "@/view/home/Home.vue"
import { usePublicStore } from "@/store"
import { themeList } from "@/types/public"

const PublicStore = usePublicStore()
const themeName = localStorage.getItem("theme");

onBeforeMount(() => {
	PublicStore.setCurrentTheme(themeName ? themeName : themeList[0].name)
})
</script>

<template>
	<div class="app flex justify-center items-center">
		<home-page />
	</div>
</template>

<style scoped lang="scss">
.app {
	width: 100%;
	height: 100%;
	overflow: hidden;
	background: url("@/assets/img/bg.png");
	background-size: 100% 100%;
}
</style>
