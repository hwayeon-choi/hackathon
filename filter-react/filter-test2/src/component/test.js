import React, { useState } from 'react';
import data from '../db/cateData.json';

function SetCate(){
  //데이터를 넣을 빈 배열
  const [checkedList, setCheckedList] = useState([]);
  const onClickedEl =(clicked, item)=> {
    if(clicked){
      setCheckedList([...data.region, item]);
    }else if(!clicked){
      setCheckedList(checkedList.filter(el => el !== item));
    }
  };
  // 다시 누르면 리스팅 목록에서 카테고리가 삭제되며 클릭도 해제됨
  const onRemove = item => {
    setCheckedList(checkedList.filter(el => el !== item));
  };

  return (
    <>
    <div>
      {data.region.map((item)=>{
        return (
          <button 
            key={item.id}
            type="button"
            className={item.category}
            value={item.korName}
            onChange={e => {
              onClickedEl(e.target.clicked, e.target.value);
            }}
            //클릭&해제
            clicked={data.region.includes(item.korName) ? true : false}
          >{item.korName}</button>
        )
      })}
    </div>
    <div>
      //리스팅 컨테이너
      {data.region.length === 0 && (
        <b>'null'</b>
      )}
      {data.region.map(item=>{
      return (
        <>
        <button key={item.id} onClick={() => onRemove(item)}>삭제</button>
        </>
      )})}
    </div>
    </>
  )
}
export default SetCate;