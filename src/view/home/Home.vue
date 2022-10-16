
<script setup lang="ts">
import topBar from "@/view/topBar/TopBar.vue"
import musicPlayer from "@/view/player/MusicPlayer.vue"
import leftMenu from "@/view/leftMenu/LeftMenu.vue"

</script>
<template>
	<div class="home-page">
		<top-bar />
		<div class="main-content">
			<left-menu />
			<div class="content">
				<router-view v-slot="{ Component }">
					<transition name="fade"
						mode="out-in"
						appear>
						<keep-alive :include="[]">
							<component :is="Component" />
						</keep-alive>
					</transition>
				</router-view>
			</div>
		</div>
		<music-player />
	</div>
</template>


<style lang="scss" scoped>
.home-page {
	width: 1320px;
	height: 910px;
	background-color: #fff;

	.main-content {
		width: 100%;
		height: calc(100% - 130px);
		display: flex;

		.content {
			width: 100%;
			height: 100%;
		}
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s ease;
	}
}
</style>