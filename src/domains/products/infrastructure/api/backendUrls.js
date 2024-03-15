import { URL_PROD } from "../../../../shared/application/constants/env";

export const fetchProductById = (id = '') => `${URL_PROD}products/${id}`;