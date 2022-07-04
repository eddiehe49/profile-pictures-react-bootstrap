import axios from "axios";

const jsonplaceholderApiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/eddiehe49/profile-pictures",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})
const kratesApiClient = axios.create({
    baseURL: "https://krat.es/" + process.env.REACT_APP_Krates_ID,
    withCredentials: false,
    headers: {
        "x-api-key": process.env.REACT_APP_Krates_x_api_key,
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})

const getJsonplaceholderProfilePicturesJson = () => {
    return jsonplaceholderApiClient.get("/profilePictures")
}
const patchJsonplaceholderProfilePicturesJson = (id, profilePictures) => {
    return jsonplaceholderApiClient.patch("/profilePictures/" + id, profilePictures)
}
const getKratesProfilePicturesJson = () => {
    return kratesApiClient.get("/record/" + process.env.REACT_APP_Krates_record)
}
const putKratesProfilePicturesJson = (profilePictures) => {
    return kratesApiClient.put("/" + process.env.REACT_APP_Krates_record, profilePictures)
};

const Service = { getJsonplaceholderProfilePicturesJson, patchJsonplaceholderProfilePicturesJson, getKratesProfilePicturesJson, putKratesProfilePicturesJson }

export default Service;
