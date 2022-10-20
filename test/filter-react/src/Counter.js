import React, { useState } from 'react';

/**
 * 컴포넌트에서 동적인 값을 상태(state)라고 부른다. 
 * useState 함수를 사용하면 컴포넌트에서 상태를 관리할 수 있다. 
 * useState에서는 상태의 기본값을 파라미터로 넣어서 호출해준다. 
 * *반환은 배열이며, 첫번째 원소는 '현재 상태', 두번째 원소는 'Setter'함수
 * Setter함수는 파라미터로 전달받은 값을 '최신 상태'로 설정해준다. 
 * 기본형은 다음과 같다
  const numberState = useState(0);
  const number = numberState[0];
  const setNumber = numberState[1];
 */


/**
 * 함수형 업데이트
 * 함수형 업데이트는 주로 나중에 컴포넌트를 최적화하게 될 때 사용한다. 
 */

function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease =()=> {
    setNumber(prevNumber => prevNumber +1);
  }
  const onDecrease =()=> {
    setNumber(prevNumber => prevNumber -1);
  }
  return (
    <div>
      <h1> {number} </h1>
      <button onClick={onIncrease}> +1 </button>
      <button onClick={onDecrease}> -1 </button>
    </div>
  );
}


//Setter함수에서 업데이트하는 값을 파라미터로 넣어주는 형식
// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease =()=> {
//     setNumber(number +1);
//   }
//   const onDecrease =()=> {
//     setNumber(number -1);
//   }
//   return (
//     <div>
//       <h1> {number} </h1>
//       <button onClick={onIncrease}> +1 </button>
//       <button onClick={onDecrease}> -1 </button>
//     </div>
//   );
// }

export default Counter;