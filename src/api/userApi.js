import { axiosClient } from "./axiosClient"

const URL = 'api/users'

export const userApi = {

    async login(user) {
        const response = await axiosClient.post(`${URL}/login`, user)
        return response
    }
}