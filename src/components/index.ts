import { App } from "vue"
type Module = { [key: string]: any }
//获取当前目录及子目录下，所有以.vue结尾的文件的路径
//Use `import.meta.glob('*', { eager: true })` instead import.meta.globEager
const componentsFiles: Record<string, Module> = import.meta.glob("./*.vue", { eager: true })
export default {
    install(app: App) {
        Object.keys(componentsFiles).forEach(key => {
            //匹配以Base开头.vue结尾的文件名,如BaseHello.vue
            const match: RegExpMatchArray | null = key.match(/Base[A-Z]\w+(?=.vue)/)
            if (!match) return
            //组件名
            const name: string = match[0]
            //组件实例
            const component: Module = componentsFiles[key].default
            //全局注册
            app.component(name, component)
        })
    },
}