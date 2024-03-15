import { createSelector } from '@reduxjs/toolkit';

export const productsState = (state) => state.products;

export const getProduct = createSelector(productsState, (products) => {
	const { product } = products;
	return product;
});


export const getLoading = createSelector(productsState, (products) => {
	const { loader } = products;
	return loader;
});
