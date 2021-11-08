// import { userId } from "./userId";
const BASE_URL = "";

const createUrl = (base, path) => `${base}${path}`;


export const getUserDatas = (userId) => {

	let userData =  createUrl(BASE_URL, process.env.PUBLIC_URL + `/user/${userId}.json`)
	let activityData =  createUrl(BASE_URL, process.env.PUBLIC_URL + `/user/${userId}/activity.json`)
	let sessionData =  createUrl(BASE_URL, process.env.PUBLIC_URL + `/user/${userId}/average-sessions.json`)
	let perfData =  createUrl(BASE_URL, process.env.PUBLIC_URL + `/user/${userId}/performance.json`)

		return 	Promise.all([
			fetch(userData).then(response => { 
				// console.log(response)
				return response.json()}),
			fetch(activityData).then(response => {
				// console.log(response)
				return response.json()}),
			fetch(sessionData).then(response => { 
				// console.log(response)
				return response.json()}),
			fetch(perfData).then(response => { 
				// console.log(response)
				return response.json()})
		])
		
}
