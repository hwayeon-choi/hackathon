import React, { useRef, useState } from 'react';
// import Counter from './Counter';
// import Test from './test';
// import Wrapper from './Wrapper';
// import InputTest from './inputTest';
// import InputTestTwo from './inputTest2';
import CreateUser from './CreateUser';
import UserEdit from './userEdit';
import UserList from './UserList';
import UserRef from './userRef';
import UserRemove from './userRemove';


function App(){
  //props 준비
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: true
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4); 
  //.current의 기본값, 이 값을 수정할 때는 .current값 수정, 조회할 때도 .current 조회
  const onCreate =()=> {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦 = user.id가 id인 것을 제거함
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  }
  /**
    const onToggle = id => {
      let newUsers = users.map(user => {
        user.active=(user.id === id?(!users.active):user.active);
    return user;
    });
    setUsers(newUsers);
    }
   */
  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserEdit users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
