import axios from 'axios'


export default axios.create({
    baseURL:"http://iss.moex.com/iss/",
    responseType: 'json'
});


