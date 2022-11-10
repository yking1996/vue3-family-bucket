import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/discoverMusic'
    }
]
const files = import.meta.glob('./routes/*.ts', { eager: true }) //eager为false时是懒加载
interface FilesKey {
    default: RouteRecordRaw[]
}

for (const key in files) {
    const res = files[key]
    // let res = await files[key]()
    //files[key]()作为promise<unknow>的类型修正
    const result: FilesKey = <FilesKey>res
    for (const item of result.default) {
        routes.push(item)
    }
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
router

export default router
