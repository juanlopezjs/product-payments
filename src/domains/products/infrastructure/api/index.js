import { fetchProductById } from "./backendUrls";

export const getFetchProductById = (id) => {
    const requestOptions = {
		method: 'GET',
    };
	return fetch(fetchProductById(id), requestOptions).then((response) => response.json());
}