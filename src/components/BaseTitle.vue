<template>
    <div class="base-title" @click="emitClick">
        <span>{{title}}</span>
        <i class="iconfont"
            :class="icon"></i>
    </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    title: string,
    icon?: string
}>(), {
    title: '',
    icon: ''
})
const emit = defineEmits([
    'on-click'
])
const emitClick = () => {
    emit('on-click')
}
</script>

<style lang="scss" scoped>
.base-title {
    display: flex;
    align-items: center;
    line-height: 1;
    font-size: 20px;
    padding: 10px 0;
    span {
        font-weight: bold;

    }

    i {
        font-size: 20px;
    }
}
</style>