import React, { useRef, useState } from 'react';

/**
 * ? useRef로 특정 DOM 선택하기
 * 리액트에서는 ref를 사용해 DOM을 가져온다. 
 * 함수형 컴포넌트에서는 콜백함수 or Reac.createRef함수 사용
 */

//초기화가 되었을 때 이름 input에 포커스가 잡히게
function InputTestTwo() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
    });
    const nameInput = useRef();
    
    const {name, nickname} = inputs; //비구조화 할당으로 값 추출
    
  const onChange =(e)=> {
    const {value, name} = e.target; //1. e.target에서 name과 value를 추출
    setInputs({
      ...inputs, //2. 기존 객체를 복사
      [name]: value //3. name키를 가진 값을 value로 설정 
    });
  };

  const onReset =()=>{
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input 
      name='name' 
      placeholder='이름' 
      onChange={onChange}
      value={name}
      ref={nameInput}
      />
      <input 
      name='nickname' 
      placeholder='닉네임' 
      onChange={onChange}
      value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name}({nickname})
      </div>
    </div>
  );
};

export default InputTestTwo;