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

export const geShowModalCredit = createSelector(productsState, (products) => {
	const { showModalCredit } = products;
	return showModalCredit;
});

export const gePayment = createSelector(productsState, (products) => {
	const { payment } = products;
	return payment;
});

export const geFocusElement = createSelector(productsState, (products) => {
	const { focusElement } = products;
	return focusElement;
});

export const geShowModalSummary = createSelector(productsState, (products) => {
	const { showModalSummary } = products;
	return showModalSummary;
});