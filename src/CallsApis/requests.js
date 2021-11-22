// Two bases url's to fetch datas from local mock or back-end
// const BASE_URL = "http://127.0.0.1:3000";
const BASE_URL = "";

const createUrl = (base, path) => {
	let url = `${base}${path}`
	if(BASE_URL === "") {
		url += ".json"
	}
	return url
};

const get = (url) => fetch(createUrl(BASE_URL, url)).then(response => response.json())

/**
 * @param  {number} userId
 */
export const getUserDatas = (userId) => {

	
	let userData =  get(process.env.PUBLIC_URL + `/user/${userId}`)
	let activityData =  get(process.env.PUBLIC_URL + `/user/${userId}/activity`)
	let sessionData =  get(process.env.PUBLIC_URL + `/user/${userId}/average-sessions`)
	let perfData =  get(process.env.PUBLIC_URL + `/user/${userId}/performance`)

    return Promise.all([userData, activityData, sessionData, perfData])


		// return 	Promise.all([
		// 	fetch(userData).then(response => { 
		// 		// console.log(response)
		// 		return response.json()}),
		// 	fetch(activityData).then(response => {
		// 		// console.log(response)
		// 		return response.json()}),
		// 	fetch(sessionData).then(response => { 
		// 		// console.log(response)
		// 		return response.json	
		// 	fetch(perfData).then(response => { 
		// 		// console.log(response)
		// 		return response.json()})
		// ])
		
}
