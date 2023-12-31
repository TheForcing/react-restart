import { createAction, handleActions} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction({ type: INCREASE});
export const decrease = createAction({ type: DECREASE});

const initialState = {
    number: 0
};

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number +1}),
        [DECREASE]: (state, action) => ({ number: state.number -1})
    },
    initialState,
);

export default counter;

