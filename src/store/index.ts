import { defineStore } from "pinia";
type User = {
    name: string,
    age: number
}
const Login = ():Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'test',
                age: 1
            })
        }, 2000);
    })
}
export const useTestStore = defineStore('TEST', {
    state:() => ({
        current: 1,
        name: 'testName',
        user: <User>{}
    }),
    //类似computed，可以修饰一些值
    getters: {
        newName(): string {
            return `$-${this.name}`
        },
        getUserAge(): number {
            return this.user.age
        }
    },
    //methods 可以做同步异步的操作
    actions: {
        setCurrent(params: number) {
            this.current = params
        },
        async setUser() {
            const res = await Login();
            this.user = res;
            this.setName("changeName")
        },
        setName(name: string) {
            this.name = name
        }
    }
})