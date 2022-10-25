import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./component/prac/UserList";
import CreateUser from "./component/prac/CreateUser";
import { ActionSheetIOS } from "react-native";

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
  switch(action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
      default: //<-??? 
        return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  return (
    <>
    <CreateUser />
    <UserList users={[]} />
    <div>활성사용자 수 : 0</div>
    </>
  );
};

export default App;
