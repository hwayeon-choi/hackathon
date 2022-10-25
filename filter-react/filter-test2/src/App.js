import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./component/prac/UserList";
import CreateUser from "./component/prac/CreateUser";

const CountActiveUsers =(users)=> {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''
  },
  users: [
    {
      id: 1,
      username: '김갑수',
      email: 'random@email.com',
      active: true
    },
    {
      id: 2,
      username: '토마스',
      email: 'tom@email.com',
      active: false
    },
    {
      id: 3,
      username: '박집중안돼',
      email: 'nohead@email.com',
      active: true
    },
  ]
};

/* 리듀서 함수 */
const reducer=(state, active)=> {
  return state;
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <CreateUser />
    <UserList users={[]} />
    <div>활성사용자 수 : 0</div>
    </>
  );
};

export default App;
