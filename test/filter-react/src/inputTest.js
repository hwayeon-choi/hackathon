import React, { useState } from 'react';

/**
 * input버튼을 누르면 값이 비워지도록 구현
 * useState, input의 onChange '이벤트' 사용 
 * 이벤트에 등록하는 함수에서는 이벤트 객체 'e'를 파라미터로 받아와서 사용할 수 있다.
 * 이 객체의 e.target은 이벤트가 발생한 input DOM을 가리킨다. 
 * 따라서 e.target.value는 현재 input에 입력한 값이 될 것
 * 이 값을 useState를 통해 관리할 수 있다. 
 */

//? 1개의 input 상태 관리
// function InputTest() {
//   const [text, setText] = useState('');

//   const onChange =(e)=> {
//     setText(e.target.value);
//   };

//   const onReset =()=> {
//     setText('');
//   }
//   return (
//     <div>
//       <input onChange={onChange} value={text} />
//       <button onClick={onReset}> 초기화 </button>
//       <div>
//         <b>값: {text}</b>
//       </div>
//     </div>
//   );
// }

// export default InputTest;

//? 여러개의 input상태 관리
function InputTest() {
  const [inputs, setInputs] = useState({
    //useState에서는 객체 형태의 상태 관리가 필요 
    name: '',
    nickname: ''
  });

  const {name, nickname} = inputs; //비구조화 할당을 통해 값 추출

  const onChange =(e)=> {
    const {value, name} = e.target; //1. e.target 에서 name 과 value 를 추출
    /*
     * 리액트 상태에서 객체를 수정해야 할 때에는 직접 수정하면 안됨(ex: inputs[name] = value;)
     */
    setInputs({
       ...inputs, //2.기존의 input 객체를 복사
       [name]: value //3. name 키를 가진 값을 value로 설정
    });
    /*
     * 새로운 객체를 만들어서 그 객체에 변화를 주고, 이를 상태로 사용해주어야 함 => '불변성을 지켜주기'
    */
  };

  const onReset =()=> {
    setInputs({
      name: '',
      nickname: ''
    })
  };

  return (
    <div>
      <input name='name' placeholder='이름' onChange={onChange} value={name} />
      <input name='nickname' placeholder='닉네임' onChange={onChange} value={nickname}/>
      <button onClick={onReset}> 초기화 </button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
  );
}

export default InputTest;