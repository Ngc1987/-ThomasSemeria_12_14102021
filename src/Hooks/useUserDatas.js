import React, { useState, useEffect, useMemo } from "react";
import useApiResult from "./useApiResult";
import { getDatas } from "../CallsApis/requests";

// export function getUserDatas(userId) {
// 	return fetch(`/user/${userId}.json`)
// 	  .then(data => data.json())
// 	  .then((result) => result)
//   }

const useUserDatas = () => {

	const url = useMemo(() => getDatas(), [])
	// console.log(url)
	return useApiResult(url)
	// const [userDatas, setUserDatas] = useState([]);


// 	useEffect(() => {
// 		fetch(`/user/${userId}.json`)
// 	  .then(async (response) => {
// 		  if(response.ok) setUserDatas(await response.json())
// 	  })
// 	}, [userId]);

// 	return userDatas
};


export default useUserDatas;