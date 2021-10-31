// import { userId } from "./userId";
const BASE_URL = "/";

const createUrl = (base, path) => `${base}${path}`;


export const getUserDatas = (userId) => {

	let userData =  createUrl(BASE_URL, `user/${userId}.json`)
	let activityData =  createUrl(BASE_URL, `user/${userId}/activity.json`)
	let sessionData =  createUrl(BASE_URL, `user/${userId}/average-sessions.json`)
	let perfData =  createUrl(BASE_URL, `user/${userId}/performance.json`)

		return Promise.all([
			fetch(userData).then(response => response.json()),
			fetch(activityData).then(response => response.json()),
			fetch(sessionData).then(response => response.json()),
			fetch(perfData).then(response => response.json())
		])
		
}
