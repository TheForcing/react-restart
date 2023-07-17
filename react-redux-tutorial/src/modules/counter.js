import { createAction} from 'redux-actions';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction({ type: INCREASE});
export const decrease = createAction({ type: DECREASE});

const initialState = {
    number: 0
};

function counter(state = initialState, action) {
    switch(action.type){
        case INCREASE:
            return {
                number: state.number+1
            };
        case DECREASE:
            return {
                number: state.number-1
            };
         default:
            return state;
    }
}

export default counter;

