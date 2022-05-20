import axios from 'axios';

export const get = async (url) =>{
    return await axios.get(url);
}

export const create =async(url,data) =>{
    return await axios.post(url,data)
};

export const save =async(url,data) =>{
    return await axios.put(url,data)
};

export const remove =async(url,id)=>{
    return await axios.delete(`${window.Application.appUrl}/api/form/${id}`);
}