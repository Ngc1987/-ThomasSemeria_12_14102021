// Two bases url's to fetch datas from local mock or back-end
// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "";

/**
 * @param  {string} base First part of API adress ("" for mocked datas)
 * @param  {string} path Path of the desired end-point of the API
 * Function to create the url to fetch, who check if datas are mocked and add .json if needed
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
 * @param {string} url Path of the desired end-point of the API
 * Function to fetch datas, and return response in json format
 */
const get = (url) => fetch(createUrl(BASE_URL, url)).then(response => response.json())

/**
 * @param  {number} userId Id of the user
 * Get all the user datas we need for all our components
 */
export const getUserDatas = (userId) => {

	let userData =  get(process.env.PUBLIC_URL + `/user/${userId}`)
	let activityData =  get(process.env.PUBLIC_URL + `/user/${userId}/activity`)
	let sessionData =  get(process.env.PUBLIC_URL + `/user/${userId}/average-sessions`)
	let perfData =  get(process.env.PUBLIC_URL + `/user/${userId}/performance`)

    return Promise.all([userData, activityData, sessionData, perfData])
}
