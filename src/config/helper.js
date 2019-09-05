import axios from "axios"

export const request = (path, data, method) => {
    let serverUrl = 'https://google.com'
    return axios({
        method,
        url: `${serverUrl}${path}`,
        headers: {
            'Content-Type':'application/json',
            // 'Content-Type': 'application/json;charset=UTF-8',
            // 'Content-Type': 'application/xhtml+xml'
            // 'Accept': 'application/json',
            // ACCESS_TOKEN: ACCESS_TOKEN
            // LOCATION_TOKEN: LOCATION_TOKEN
        },
        data
    })
}

export const getRequest = (path, data) => request(path, data, "GET")
export const postRequest = (path, data) => request(path, data, "POST")
export const patchRequest = (path, data) => request(path, data, "PATCH")
export const deleteRequest = (path, data) => request(path, data, "DELETE")
export const putRequest = (path, data) => request(path, data, "PUT")