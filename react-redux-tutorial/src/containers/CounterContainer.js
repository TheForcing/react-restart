import React, { useCallback } from 'react'
import { connect, useDispatch, useSelector} from 'react-redux'
import Counter from '../components/Counter'
import { increase, decrease } from '../modules/counter';


const CounterContainer = () => {
    const number = useSelector(state=> state.counter.number);
    const dispatch= useDispatch();
    const onIcrease = useCallback(()=> dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(()=> dispatch(decrease()), [dispatch]);
  return (<Counter 
    number={number}
    onIcrease={()=> dispatch(increase())}
    onDecrease={()=> dispatch(decrease())}     
  />
  );
};

const mapStateToProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
    //임시 함수
    increase: ()=>{
        dispatch(increase());
    },
    decrease: ()=>{
       dispatch(decrease());
    },
});

export default connect(
    state=>({
        number: state.counter.number,
    }),{
        increase,
        decrease,
    },
)(CounterContainer);



