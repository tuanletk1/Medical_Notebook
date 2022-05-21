import { axiosClient } from "./axiosClient"
import {dateFormat} from "../util/dateFormat";

const URL = 'api/register-injections'

export const registerInjectionApi = {

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
        formData.append('the_second_time', injectionInfo.theSecondTime)
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
        formData.append('date_injection', dateFormat(injectionInfo.dateInjection, 'dd-MM-yyyy'))
        formData.append('time_of_day', injectionInfo.timeOfDay)
        formData.append('symptom_1', injectionInfo.symptom_1)
        formData.append('name_1', injectionInfo.name_1)
        formData.append('status_1', injectionInfo.status_1)
        formData.append('symptom_2', injectionInfo.symptom_2)
        formData.append('name_2', injectionInfo.name_2)
        formData.append('status_2', injectionInfo.status_2)
        formData.append('symptom_3', injectionInfo.symptom_3)
        formData.append('name_3', injectionInfo.name_3)
        formData.append('status_3', injectionInfo.status_3)
        formData.append('symptom_4', injectionInfo.symptom_4)
        formData.append('name_4', injectionInfo.name_4)
        formData.append('status_4', injectionInfo.status_4)
        formData.append('symptom_5', injectionInfo.symptom_5)
        formData.append('name_5', injectionInfo.name_5)
        formData.append('status_5', injectionInfo.status_5)
        formData.append('symptom_6', injectionInfo.symptom_6)
        formData.append('name_6', injectionInfo.name_6)
        formData.append('status_6', injectionInfo.status_6)
        formData.append('symptom_7', injectionInfo.symptom_7)
        formData.append('name_7', injectionInfo.name_7)
        formData.append('status_7', injectionInfo.status_7)
        formData.append('symptom_8', injectionInfo.symptom_8)
        formData.append('name_8', injectionInfo.name_8)
        formData.append('status_8', injectionInfo.status_8)
        formData.append('symptom_10', injectionInfo.symptom_10)
        formData.append('name_10', injectionInfo.name_10)
        formData.append('status_10', injectionInfo.status_10)
        formData.append('symptom_11', injectionInfo.symptom_11)
        formData.append('name_11', injectionInfo.name_11)
        formData.append('status_11', injectionInfo.status_11)
        formData.append('symptom_12', injectionInfo.symptom_12)
        formData.append('name_12', injectionInfo.name_12)
        formData.append('status_12', injectionInfo.status_12)
        formData.append('symptom_9', injectionInfo.symptom_9)
        formData.append('name_9', injectionInfo.name_9)
        formData.append('status_9', injectionInfo.status_9)
        return await axiosClient.post(`${URL}`, formData)
    },

}