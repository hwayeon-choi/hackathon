import React from 'react'; // 리액트 호출
import {View, Text} from 'react-native'; // 사용할 컴포넌트 호출

function Greeting(props) { // 함수 컴포넌트 선언 (<-> 클래스 컴포넌트)
  return (
    <>
      <View>
        <Text>안녕하세요 {props.name}!</Text>
      </View>
      <Text>Extra Text!</Text>
    </>
  );
// props라는 파라미터를 추가하고 name이라는 props 추가
// 빈 꺽쇠: JSX Fragment
}

Greeting.defaultProps = { // props 기본값 지정
  name: '리액트 네이티브',
};

export default Greeting;
