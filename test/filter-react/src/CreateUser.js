import React from "react";

//상태관리 : 부모컴포넌트인 App에서 input값, 이벤트 함수들은 props로 넘겨받아서 사용 

function CreateUser({username, email, onChange, onCreate}){
  return (
    <div>
      <input
      name="username"
      placeholder="계정명"
      onChange={onChange}
      value={username}
      />
      <input
      name="email"
      placeholder="이메일"
      onChange={onChange}
      value={email}
      />
      <button onClick={onCreate}> 등록 </button>
    </div>
  );
}

export default CreateUser;

