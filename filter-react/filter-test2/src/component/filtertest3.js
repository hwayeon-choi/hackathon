import React, { useState } from 'react';
import data from '../db/cateData.json';
import placeData from '../db/all.json';

const Filter3 = () => {

  //첫번째 카테고리 상태 설정
  const [regionClick, setregionClick] = useState(null);
  const [regionPrevClick, setRegionPrevClick] = useState(null);

  //두번째 카테고리 상태 설정
  const [placeClick, setplaceClick] = useState(null);
  const [placePrevClick, setPlacePrevClick] = useState(null);

  //세번째 카테고리 상태 설정
  const [dogClick, setDogClick] = useState(null);
  const [dogPrevClick, setDogPrevClick] = useState(null);

  //테스트: 누른 체크리스트들을 배열의 형태로 저장할 상태
  // const [clickedCheckList, setClickedCheckList] = useState([]);


  const GetClick = (e) => {
    setregionClick(e.target.id);
    // console.log(e.target.id);
  };
  const GetPlace = (e) => {
    setplaceClick(e.target.id)
  };
  const Getdog = (e) => {
    setDogClick(e.target.id)
  };


  React.useEffect(
    (e) => {
      if (regionClick !== null) {
        let region = document.getElementById(regionClick);
        placeData.filter(item=> {
          if(item.region === region.innerHTML){
            return (
              console.log(item)
            )
          }
        })
        // console.log(region.innerHTML); 
        //클릭한 메뉴1번 출력
        region.style.backgroundColor = "#E3E3E3";
        region.style.border = "1px solid #6C6C6C";
      }

      if (regionPrevClick !== null) {
        let prev = document.getElementById(regionPrevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }

      setRegionPrevClick(regionClick);
    }, [regionClick]);

  React.useEffect(
    (e) => {
      if (placeClick !== null) {
        let place = document.getElementById(placeClick);
        placeData.filter(item=> {
          if(item.place_type === place.innerHTML){
            return (
              console.log(item)
            )
          }
        })
        //클릭한 메뉴2번 출력
        place.style.backgroundColor = "#E3E3E3";
        place.style.border = "1px solid #6C6C6C";
      }

      if (placePrevClick !== null) {
        let prev = document.getElementById(placePrevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }

      setPlacePrevClick(placeClick);
    }, [placeClick]);

    
  React.useEffect(
    (e) => {
      if (dogClick !== null) {
        let dogType = document.getElementById(dogClick);
        placeData.filter(item=> {
          if(item.dog_type === dogType.innerHTML){
            return (
              console.log(item)
            )
          }
        })
        //클릭한 메뉴3번 출력
        dogType.style.backgroundColor = "#E3E3E3";
        dogType.style.border = "1px solid #6C6C6C";
      }

      if (dogPrevClick !== null) {
        let prev = document.getElementById(dogPrevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }

      setDogPrevClick(dogClick);
    }, [dogClick]);

  const result = () => {
    console.log(regionClick) 
    //선택한 상태가 아닐 시 null
    //선택한 상태가 있을 시 클릭한 id 출력
    console.log(placeClick) //선택한 상태가 아닐 시 null
  }
  const refreshBtn = () => {
    console.log('초기화')
    console.log(setregionClick(null))
    console.log(setplaceClick(null))
  }
  return (
    <>
      <div>
        <h2>카테고리</h2>
        <div id = 'con1'>
          <h4>지역</h4>
          <div>
            {data.region.map(item => 
            <button
              id={item.engName}
              onClick={GetClick}
            >{item.korName}</button>
              )}
          </div>
        </div>
        <div id = 'con2'>
          <h4>장소</h4>
          <div>
            {data.place_type.map(item => 
            <button
              id={item.engName}
              onClick={GetPlace}
            >{item.korName}</button>
              )}
        </div>
        <div id = 'con3'>
          <h4>견종</h4>
          <div>
            {data.dog_type.map(item => 
            <button
              id={item.engName}
              onClick={Getdog}
            >{item.korName}</button>
              )}
          </div>
        </div>
        <div id = 'con4'>
          <div>
            <button
              id="7"
              onClick={refreshBtn}
            >초기화</button>
            <button
              id="8"
              onClick={result}
            >찾기</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default Filter3;
