export const productRoute = (id = ':id') => `/product/${id}`;
export const successPaymentRoute = (id = ':id') => `${productRoute(id)}/success-payment`;
export default {};
