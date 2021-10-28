import { useEffect, useState, useRef, useReducer } from "react"

const useApiResult = (url) => {

	// const cache = useRef({})

	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		// let cancelRequest = false;
		fetch(url)
        .then(async (response) => {
			console.log(response)
        if (response.ok) {
			setData(await response.json());
          	setError(null);
        } else {
          setError(await response.text());
        }
      })
      .catch((err) => {
        setError(err.message);
      });

		// return function cleanup() {
		// 	cancelRequest = true;
		// };	
	}, [url]);

	return [data, error]
}

export default useApiResult;