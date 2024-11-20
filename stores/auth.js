import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', {
    state: () => ({ username: 'sontaya' }),
    getters: {
        GetuserName:(state) => state.username
    },
})