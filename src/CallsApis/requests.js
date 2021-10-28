// import { userId } from "./userId";
const BASE_URL = "/";
// const BASE_URL2 = "http://api.weatherstack.com/current?access_key=d3784b3d853bead14a00e12a9a432a22&";

const userId = window.location.pathname.split("/")[2];
// console.log(userId, window.location.pathname.split("/"))
const createUrl = (base, path) => `${base}${path}`;


export const getUserDatas = (userId) => {
	return createUrl(BASE_URL, `user/${userId}.json`)
}
export const getActivityDatas = (userId) => {
	return createUrl(BASE_URL, `user/${userId}/activity.json`)
}
export const getSessionsDatas = (userId) => {
	return createUrl(BASE_URL, `user/${userId}/average-sessions.json`)
}
export const getPerfDatas = () => {
	return createUrl(BASE_URL, `user/${userId}/performance.json`)
}
	// {
	// 	method: "GET",
	// }
	// console.log((createUrl(BASE_URL, `user/${userId}`)))

// export const getDatas = () => [
	
// 	createUrl(BASE_URL2, `query=Bretignolles`),
// 	{
// 		method: "GET",
// 	}
// 	// console.log((createUrl(BASE_URL, `user/${userId}`)))
// ]
