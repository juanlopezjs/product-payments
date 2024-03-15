import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFetchProductById } from '../../infrastructure/api';

const initialState = {
	product: {},
	loader: false
};

export const getProductById = createAsyncThunk(
	'products/getProductById',
	async (id, { rejectWithValue }) => {
		try {
            return await getFetchProductById(id);
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

const Products = createSlice({
	name: 'products',
    initialState,
	extraReducers: builder => {
		builder.addCase(getProductById.pending, (state, { payload }) => {
			state.loader = true;
		}),
		builder.addCase(getProductById.fulfilled, (state, { payload }) => {
			state.product = payload;
			state.loader = false;
		})
	},
});

export default Products;