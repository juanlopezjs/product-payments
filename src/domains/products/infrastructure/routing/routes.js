export const productRoute = (id = ':id') => `/producto/${id}`;
export const successPaymentRoute = (id = ':id') => `${productRoute(id)}/success-payment`;
export default {};
