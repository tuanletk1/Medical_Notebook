import { axiosClient } from "./axiosClient"

const URL = 'api/users'

export const userApi = {

    async login(user) {
        return await axiosClient.post(`${URL}/login`, user)
    },

    async get(userId) {
        return await axiosClient.get(`${URL}/${userId}`)
    },

    async update(user) {
        const data = new URLSearchParams(user)
        return await axiosClient.put(`${URL}/${user.userId}`, data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }})
    }
}