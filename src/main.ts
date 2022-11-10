import { createApp } from 'vue'
import App from './App.vue'
//引入全局样式
import '@/assets/css/style.scss'
//引入tailwindcss
import '@/assets/css/tailwindcss.css'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import "@/assets/css/eleTheme.scss"
import zhCn from 'element-plus/es/locale/lang/zh-cn'
//引入element-icon
import { iconInit } from '@/utils/elementIconReg'
//引入pinia
import { createPinia } from 'pinia'
//引入router
import router from './router'
//引入全局组件注册
import globalComponents from '@/components'

const store = createPinia()
const app = createApp(App)
    .use(ElementPlus, {
        locale: zhCn
    })
    .use(store)
    .use(router)
    .use(globalComponents)
iconInit(app)

app.mount('#app')
