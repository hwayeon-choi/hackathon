import React from 'react';
import CreateCate from './component/CreateCate';
import CreateBtn from './component/CreateBtn';
// import AllFilterClickListener from './component/AllfilterClickListener';
import JsonTest from './component/JsonTest';


function App() {

  const onClick=()=>{
    //클릭했을 때 이벤트.. 
    console.log('clicked')
  }
  return (
    <>
    <CreateCate />
    {/* <CreateBtn     
      className='test'
      cateName='test2'
      onClick={onClick} /> */}
    <JsonTest />
    </>
  );
}


export default App;
