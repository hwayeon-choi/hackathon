import React, { useState, useReducer } from "react";

/**
 * reducer : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
 * fucntion reducer(state, action){
 * @action : 업데이트를 위한 정보
 * const nextState = ...
 * return nextState;
 * }
 */

/**
 * useReducer
 * const [state, dispatch] = useReducer(reducer, initialState);
 * @state : 앞으로 컴포넌트에서 사용할 수 있는 상태
 * @dispatch : 액션을 발생시키는 함수(ex: dispatch({type:'INCREMENT'}))
 */

/* counter */
function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}

function Counter(){
  const [number, dispatch] = useReducer(reducer, 0);
  const onIncrease =()=> {
    dispatch({type:'INCREMENT'});
  };
  const onDecrease =()=> {
    dispatch({type: 'DECREMENT'});
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter;