import { defineStore } from 'pinia'


export const useAuthStore = defineStore('AuthStore', () => {
    const userdata = ref({ name: 'sontaya', Profileimg: 'https://cdn.vuetifyjs.com/images/john.jpg' })

    return { userdata }
})