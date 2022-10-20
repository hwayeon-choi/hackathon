import React, { useState } from 'react';

/**
 * ? 배열 렌더링하기
 * 한 파일에 여러개의 컴포넌트를 선언해도 상관없음
 * 이 방식으로 재사용성 높은 컴포넌트 만들기
 */

function User({user}){
  return(
    <div>
      <b>{user.username}</b>
      <span>({user.email})</span>
    </div>
  );
}

/**
 * * 동적인 배열 렌더링
 * map()사용
 * 리액트에서 배열을 렌더링할 때는 key라는 props를 설정해줘야 함
 * key.값은 각 원소들마다 가지고 있는 '고유값'으로 설정해줘야 한다.
 * 예시 배열에선 id가 고유값 
 */
function UserList(){
  
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
    /**
     * 만약 배열 안 원소의 고유값이 없다면 map()함수사용할 때 설정하는 콜백함수의 두 번째 파라미터 'index'를 key로 사용하면 된다.
      <div>
      {users.map((user, index) => {
        <User user={user} key={index} />
      })}
      <div>
     */
  );
}

export default UserList;


//정적인 렌더링
// function UserList(){
  
//   const users = [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com'
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com'
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com'
//     }
//   ];

//   return (
//     <div>
//       <User user={users[0]} />
//       <User user={users[1]} />
//       <User user={users[2]} />
//     </div>
//   );
// }

// export default UserList;