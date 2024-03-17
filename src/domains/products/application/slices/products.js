import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFetchProductById } from '../../infrastructure/api';

const initialState = {
	product: {},
	loader: true,
	showModalCredit: false,
	payment: {},
	focusElement: ''
};

export const getProductById = createAsyncThunk('products/getProductById', async (id, { rejectWithValue }) => {
	try {
		return await getFetchProductById(id);
	} catch (error) {
		return rejectWithValue(error);
	}
});

const Products = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setShowModalCredit: (state, { payload }) => {
			state.showModalCredit = payload;
		},
		setPayment: (state, { payload }) => {
			state.payment = { ...state.payment, ...payload };
		},
		setFocusElement: (state, { payload }) => {
			state.focusElement = payload;
		},
	},
	extraReducers: ({ addCase }) => {
		addCase(getProductById.pending, (state) => {
			state.loader = true;
		}),
		addCase(getProductById.fulfilled, (state, { payload }) => {
			state.product = payload;
			state.loader = false;
		});
	},
});

export const { setShowModalCredit, setPayment, setFocusElement } = Products.actions;

export default Products;
