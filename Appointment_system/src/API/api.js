import axios from 'axios'

const axiosusers = axios.create({
    baseURL:'http://localhost:8080/api/user',
    withCredentials:true,
});
const axiosdoctor = axios.create({
    baseURL:'http://localhost:8080/api/doctor',
    withCredentials:true,
})

export {
    axiosusers,
    axiosdoctor
} 