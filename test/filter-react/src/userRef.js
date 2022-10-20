import React, { useState } from 'react';

/**
 * ? useRef로 컴포넌트 안의 변수 만들기
 * 함수형 컴포넌트에서 DOM을 선택할 때 useRef, 사용하는데
 * useRef Hook은 DOM선택 외에도 컴포넌트 안에서 조회 및 수정할 수 있는 변수 관리가 가능하다
 * uesRef로 관리하는 변수는 값이 바뀐다고 해서 컴포넌트가 리렌더링되지는 않는다. 
 * 리액트 컴포넌트의 상태는 상태를 바꾸는 함수를 호출 -> 렌더링 이후에 업데이트된 상태를 조회할 수 있지만
 * useRef로 관리하는 변수는 설정하고 바로 조회가 가능하다. 다음과 같은 값들을 관리 가능
 *  - setTimeout, setInterval을 통해 만들어진 id 
 *  - 외부 라이브러리를 사용하여 생성된 인스턴스
 *  - scroll 위치
 * 사전작업 : 사용하려는 배열을 App에서 선언하고 props로 전달
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
function UserRef({users}){
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

export default UserRef;
