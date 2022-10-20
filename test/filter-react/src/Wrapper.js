import React from 'react';

function Wrapper({children}) {
  const style = {
    backgroundColor: '#947',
    border: '1px dashed #124'
  };
  return (
    <div style={style}>{children}</div>
  )
}
export default Wrapper;