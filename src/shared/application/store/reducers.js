import { combineReducers } from 'redux';
import { importFiles } from '../helpers/common-functions';

const importRouter = import.meta.glob('../../../domains/**/application/slices/**.js');
const slicesDomain = await importFiles(importRouter);

let reducers = {};
slicesDomain.forEach((slice) => {
	reducers[slice.default.name] = slice.default.reducer;
});

export default combineReducers({
	...reducers,
});
