<script setup lang="ts">
</script>

<template>
	<div id="app">
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
</template>

<style scoped lang="scss">
#app {
	width: 100%;
	height: 100%;

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
