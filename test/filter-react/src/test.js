import React from 'react';

function Test({name, bacgroundColor, isSpecial}) {
  return(
    <div style={{bacgroundColor}}>
      {isSpecial ? <b>★</b> : null}
      나의 이름은 {name}
    </div>
  )
}

Test.defaultProps ={
  name : '홍길동'
}

export default Test;