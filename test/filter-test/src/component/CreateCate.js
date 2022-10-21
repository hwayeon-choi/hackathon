import React, { useState } from 'react';
import CreateBtn from './CreateBtn';
// function Main() {
//   //상태 생성
//   //처음 상태
//   const [intState, setIntState] = useState([])
//   //data.Json에서 선택한 카테고리에 해당하는 내용물 들어있는 상태
//   const [cateState, setCateState] = useState([])
//   //처음 화면에 데이터가 준비되었는지 관리할 상태
//   const [ready, setReady] = useState(true)
  
//   const category =(cate)=> {
//     if(cate == '전체'){
//       //전체 상태에서 초기화
//       setCateState(intState)
//     } else {
//       setCateState(intState.filter((data) => {
//         return data.category == cate
//       }))
//     }
//   }
//   return ready ? console.log('test') : (
//     <BtnMaker onClick={()=> {category('test1')}}></BtnMaker>
//     {cateState.map()}
//   )
// }


function CreateCate() {
  const passingCates = {
    region: {
      seoul: "서울특별시",
      daegeon: "대전광역시",
      busan: "부산광역시",
    },
    place_type: {
      restaurant: "식당",
      cafe: "카페",
      pet_hospital: "동물병원",
      accomodation: "숙박",
      park: "공원",
      pet_ground: "애견운동장",
      grooming_shop: "미용",
      pet_hotel: "위탁관리업",
      activity: "체험",
      tour: "관광지",
      pet_rest: "반려동물 편의시설(놀이터)",
    },
    dog_type: {
      small: "소형견",
      middle: "중형견",
      big: "대형견",
    },
  }
  const getKeys = Object.keys(passingCates); //region, plce_type, dog_type(문자열)
  const getvals = Object.values(passingCates); //키에 해당하는 각 객체 반환

  //소객체의 키값
  const getKeysRegion = Object.keys(passingCates.region);
  const getKeysPlace = Object.keys(passingCates.place_type);
  const getKeysDog = Object.keys(passingCates.dog_type);

  //소객체의 값
  const getValsRegion = Object.values(passingCates.region);
  const getValsPlace = Object.values(passingCates.place_type);
  const getValsDog = Object.values(passingCates.dog_type);

  const onClick=()=>{
    //클릭했을 때 이벤트.. 
    console.log('clicked')
  }

  // const getKeys = Object.keys(passingCates.region);
  return (
    <div>
      {/* {getKeys.map((entrie, index) => {
        console.log(entrie);
      })}
      {getvals.map((entrie, index) => {
        console.log(entrie);
      })} */}
      {getKeysRegion.map((entrie, index) => {
        console.log(entrie);
        <CreateBtn     
          className={entrie.seoul}
          cateName={entrie.seoul}
          onClick={onClick} />
      })}
      {/* {getKeysPlace.map((entrie, index) => {
        console.log(entrie);
      })}      
      {getKeysDog.map((entrie, index) => {
        console.log(entrie);
      })}
      {getValsRegion.map((entrie, index) => {
        console.log(entrie);
      })}
      {getValsPlace.map((entrie, index) => {
        console.log(entrie);
      })}      
      {getValsDog.map((entrie, index) => {
        console.log(entrie);
      })} */}
    </div>
  )
}

export default CreateCate;