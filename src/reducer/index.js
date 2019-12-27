import { INCREMENT } from '../constants';

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT: {
			console.log('reducer increment');

			return {
				count: state.count + 1,
			}
		}
		default: {
			console.log('reducer default');

			return state
		}
	}
}

export default reducer;
