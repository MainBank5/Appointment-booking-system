import axios from 'axios'

const axiosUsers = axios.create({
    baseURL:'http://localhost:8080/api/user',
    withCredentials:true
})
const axiosdoctor = axios.create({
    baseURL:'http://localhost:8080/api/doctor',
    withCredentials:true
})

export {
    axiosUsers,
    axiosdoctor
} 