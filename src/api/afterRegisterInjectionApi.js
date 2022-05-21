import { axiosClient } from "./axiosClient"
import {dateFormat} from "../util/dateFormat";

const URL = 'api/after-injections'

export const afterRegisterInjectionApi = {

    async getAll() {
        return await axiosClient.get(`${URL}`)
    },

    async getInfoById(id) {
        return await axiosClient.get(`${URL}/${id}`)
    },

    async deleteById(id) {
        return await axiosClient.delete(`${URL}/${id}`)
    },

    async create(injectionInfo) {
        const formData = new FormData()
        formData.append('name', injectionInfo.name)
        formData.append('date_of_birth', dateFormat(injectionInfo.dateOfBirth, 'dd-MM-yyyy'))
        formData.append('sex', injectionInfo.sex)
        formData.append('phone_number', injectionInfo.phoneNumber)
        formData.append('email', injectionInfo.email)
        formData.append('identity_code', injectionInfo.identityCode)
        formData.append('social_insurance', injectionInfo.socialInsurance)
        formData.append('job', injectionInfo.job)
        formData.append('workplace', injectionInfo.workplace)
        formData.append('address', injectionInfo.address)
        formData.append('city', injectionInfo.city)
        formData.append('district', injectionInfo.district)
        formData.append('ward', injectionInfo.ward)
        return await axiosClient.post(`${URL}`, formData)
    },
}