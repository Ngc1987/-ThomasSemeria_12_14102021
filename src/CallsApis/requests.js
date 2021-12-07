// Two bases url's to fetch datas from local mock or back-end
// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "";

/**
 * @description Function to create the url to fetch, who check if datas are mocked and add .json if needed
 * @param  {string} base First part of API adress ("" for mocked datas)
 * @param  {string} path Path of the desired end-point of the API
 */
const createUrl = (base, path) => {
	let url = `${base}${path}`
	if(base === "") {
		url += ".json"
	}
	console.log(url)
	return url
};

/**
 * @description Function to fetch datas, and return response in json format
 * @param {string} url Path of the desired end-point of the API
 */
const get = (url) => fetch(createUrl(BASE_URL, url)).then(response => response.json())

/**
 * @description Get all the user datas we need for all our components
 * @param  {number} userId Id of the user
 */
export const getUserDatas = (userId) => {

	let userData =  get(process.env.PUBLIC_URL + `/user/${userId}`)
	let activityData =  get(process.env.PUBLIC_URL + `/user/${userId}/activity`)
	let sessionData =  get(process.env.PUBLIC_URL + `/user/${userId}/average-sessions`)
	let perfData =  get(process.env.PUBLIC_URL + `/user/${userId}/performance`)

    return Promise.all([userData, activityData, sessionData, perfData])
}
