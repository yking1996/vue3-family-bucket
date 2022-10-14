import { defineStore } from "pinia";

export const usePublicStore = defineStore('PublicStore', {
    state: () => ({
        currentTheme: localStorage.getItem("theme")
    }),
    getters: {

    },
    actions: {
        setCurrentTheme(themeName: string) {
            this.currentTheme = themeName
            document.documentElement.setAttribute('theme', themeName)
            document.querySelector("html")!.className = themeName
            localStorage.setItem("theme", themeName)
        }
    }
})