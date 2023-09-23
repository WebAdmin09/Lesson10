import axios from 'axios'

const request = axios.create({
    baseURL: 'https://650e6247a8b42265ec2d0c4f.mockapi.io/',
    timeout: 10000,
})

export default request;