import React from 'react';

/**
 * ? 배열 항목을 수정하기(색변화 이벤트)
 */

function User({user, onRemove, onToggle}){
  return(
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick = {() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}
/*
  삭제 버튼이 클릭될 때 user.id 값을 앞으로 props로 받아올 onRemove 함수의 파라미터로 넣어서 호출해줘야 한다
  onRemove: 'id가 ()인 객체를 삭제하라'는 역할
  onRemove함수는 UserRemove에 전달 -> 그대로 User 컴포넌트에 전달
*/

/**
 * * 동적인 배열 렌더링
 * map()사용
 * 리액트에서 배열을 렌더링할 때는 key라는 props를 설정해줘야 함
 * key.값은 각 원소들마다 가지고 있는 '고유값'으로 설정해줘야 한다.
 * 예시 배열에선 id가 고유값 
 */

function UserEdit({users, onRemove, onToggle}){
  return (
    <div>
      {users.map(user => (
        <User 
        user={user} 
        key={user.id} 
        onRemove={onRemove}
        onToggle={onToggle}
        />
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

export default UserEdit;
