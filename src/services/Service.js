import axios from "axios";

const jsonplaceholderApiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/eddiehe49/avatars',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const jsonbinApiClient = axios.create({
    baseURL: "https://api.jsonbin.io/v3/b/624173ee0618276743817ab6",
    withCredentials: false,
    headers: {
        "X-Master-Key": "$2b$10$Dr3C03m96HY3V014" + process.env.REACT_APP_X_Master_Key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
const kratesApiClient = axios.create({
    baseURL: "https://krat.es/908f435af83b640b336f",
    withCredentials: false,
    headers: {
        "x-api-key": process.env.REACT_APP_x_api_key,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

const getJsonplaceholderAvatarsJson = () => {
    return jsonplaceholderApiClient.get('/avatars')
}
const patchJsonplaceholderAvatarsJson = (id, avatars) => {
    return jsonplaceholderApiClient.patch('/avatars/' + id, avatars)
}
const getJsonbinAvatarsJson = () => {
    return jsonbinApiClient.get('/latest')
}
const putJsonbinAvatarsJson = (avatars) => {
    return jsonbinApiClient.put('', avatars)
}
const getKratesAvatarsJson = () => {
    return kratesApiClient.get("/record/624c33c65a015dc4d2223b6e")
}
const putKratesAvatarsJson = (avatars) => {
    return kratesApiClient.put('/624c33c65a015dc4d2223b6e', avatars)
};

const Service = { getJsonplaceholderAvatarsJson, patchJsonplaceholderAvatarsJson, getJsonbinAvatarsJson, putJsonbinAvatarsJson, getKratesAvatarsJson, putKratesAvatarsJson }

export default Service;
