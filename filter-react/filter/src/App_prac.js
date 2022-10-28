import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserList from "./component/prac/UserList";
import CreateUser from "./component/prac/CreateUser";

const CountActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는 중...");
  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "김갑수",
      email: "random@email.com",
      active: true,
    },
    {
      id: 2,
      username: "토마스",
      email: "tom@email.com",
      active: false,
    },
    {
      id: 3,
      username: "박집중안돼",
      email: "nohead@email.com",
      active: true,
    },
  ],
};

/* 리듀서 함수 */
const reducer = (state, action) => {
  /**
   * swtich 문법(반복문 일종)
   * switch(조건){statement}
   * statement 안에 case를 나눠준다(실행된 statement는 콜론 이후에 작성)
   * return: (else문같은것)
   */
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        user: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id
            ? {
                ...user,
                active: !user.active,
              }
            : user
        ),
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      };
    default: //<-???
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT", //액션 객체를 사용해 inputs상태 업데이트
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(()=> {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} />
      <div>활성사용자 수 : 0</div>
    </>
  );
};

export default App;
