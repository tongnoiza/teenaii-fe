import { defineStore } from 'pinia'


export const useAuthStore = defineStore('AuthStore', {
    state: () => ({ username: 'sontaya' }),
    getters: {
        GetuserName:(state) => state.username
    },
})