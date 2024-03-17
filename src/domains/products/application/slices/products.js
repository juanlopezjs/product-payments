import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFetchProductById } from '../../infrastructure/api';

const initialState = {
	product: {},
	loader: true,
	showModalCredit: false,
	showModalSummary: false,
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
		setShowModalSummary: (state, { payload }) => {
			state.showModalSummary = payload;
		},
		setLoader: (state, { payload }) => {
			state.loader = payload;
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

export const { setShowModalCredit, setPayment, setFocusElement, setShowModalSummary, setLoader } = Products.actions;

export default Products;
