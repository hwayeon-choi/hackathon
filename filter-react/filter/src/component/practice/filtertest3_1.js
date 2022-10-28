import React, { useState } from "react";
import data from "../db/cateData.json"; //카테고리 분류용
import placeData from "../db/all.json"; //장소데이터 전체용
//각 json파일의 공통 키(region, dog_type, place_type)의 값 사용

const Filter = () => {
  //첫번째(지역) 카테고리 상태 설정
  const [regionClick, setregionClick] = useState(null);
  const [regionPrevClick, setRegionPrevClick] = useState(null);
  //두번째(견종) 카테고리 상태 설정
  const [dogClick, setDogClick] = useState(null);
  const [dogPrevClick, setDogPrevClick] = useState(null);
  //세번째(장소) 카테고리 상태 설정
  const [placeClick, setplaceClick] = useState(null);
  const [placePrevClick, setPlacePrevClick] = useState(null);


  //이벤트 타겟 설정
  //지역
  const GetRegion = (e) => {
    setregionClick(e.target.id);
  };
  //견종
  const Getdog = (e) => {
    setDogClick(e.target.id);
  };
  //장소
  const GetPlace = (e) => {
    setplaceClick(e.target.id);
  };

  React.useEffect(
    (e) => {
      if (regionClick !== null) {
        let region = document.getElementById(regionClick);
        placeData.filter((item) => {
          if (item.region === region.innerHTML) {
            // return console.log(item);
          }
        });
        // console.log(region.innerHTML);
        //클릭한 메뉴1번 출력
        region.style.backgroundColor = "#6BB8D0";
        region.style.border = "1px solid #6C6C6C";
      }

      if (regionPrevClick !== null) {
        let prev = document.getElementById(regionPrevClick);
        prev.style.backgroundColor = "#E5E5E5";
        prev.style.border = "1px solid #6C6C6C";
      }

      setRegionPrevClick(regionClick);
    },
    [regionClick] //클릭값이 업데이트 될 때만 실행
  );

  React.useEffect(
    (e) => {
      if (placeClick !== null) {
        let place = document.getElementById(placeClick);
        placeData.filter((item) => {
          if (item.place_type === place.innerHTML) {
            // return console.log(item);
          }
        });
        //클릭한 메뉴2번 출력
        place.style.backgroundColor = "#6BB8D0";
        place.style.border = "1px solid #6C6C6C";
      }

      if (placePrevClick !== null) {
        let prev = document.getElementById(placePrevClick);
        prev.style.backgroundColor = "#E5E5E5";
        prev.style.border = "1px solid #6C6C6C";
      }

      setPlacePrevClick(placeClick);
    },
    [placeClick] //클릭값이 업데이트 될 때만 실행
  );

  React.useEffect(
    (e) => {
      if (dogClick !== null) {
        let dogType = document.getElementById(dogClick);
        placeData.filter((item) => {
          if (item.dog_type === dogType.innerHTML) {
            // return console.log(item);
          }
        });
        //클릭한 메뉴3번 출력
        dogType.style.backgroundColor = "#6BB8D0";
        dogType.style.border = "1px solid #6C6C6C";
      }

      if (dogPrevClick !== null) {
        let prev = document.getElementById(dogPrevClick);
        prev.style.backgroundColor = "#E5E5E5";
        prev.style.border = "1px solid #6C6C6C";
      }

      setDogPrevClick(dogClick);
    },
    [dogClick] //클릭값이 업데이트 될 때만 실행
  );

  const result = () => {
    //선택한 상태가 아닐 시 null
    //선택한 상태가 있을 시 클릭한 id 출력
    console.log(regionClick); //타입 string
    console.log(dogClick); 
    console.log(placeClick); 
    FilterResult();
  }
  
  //*찾기버튼(result) 눌렀을 때 필터링되는 함수
  const FilterResult =()=>{
    placeData.filter(item => {
      //1차 필터 : 지역,견종
      if(item.region === regionClick && item.dog_type === dogClick){
        // console.log(item);
        //2차 필터 : 장소
        if(item.place_type !== null){
          //값이 null이 아닐 때는 1차 필터 내용 전체 출력
          console.log(item);
        }
        if(item.place_type === placeClick){
          //값이 있을 때는 2차까지 걸러서 출력
          // console.log(item);
        } 
      }
    });
  }

//초기화
  const refreshBtn = () => {
    console.log("초기화");
    console.log(setregionClick(null));
    console.log(setDogClick(null));
    console.log(setplaceClick(null));
  };

  return (
    <>
      <div>
        <h2>카테고리</h2>
        <div id="con1">
          <h4>지역</h4>
          <div>
            {data.region.map((item) => (
              <button id={item.korName} onClick={GetRegion}>
                {item.korName}
              </button>
            ))}
          </div>
        </div>
        <div id="con2">
          <h4>견종</h4>
          <div>
            {data.dog_type.map((item) => (
              <button id={item.korName} onClick={Getdog}>
                {item.korName}
              </button>
            ))}
          </div>
        </div>
        <div id="con3">
          <h4>장소</h4>
          <div>
            {data.place_type.map((item) => (
              <button id={item.korName} onClick={GetPlace}>
                {item.korName}
              </button>
            ))}
          </div>
          <div id="con4">
            <div>
              <button id="7" onClick={refreshBtn}>
                초기화
              </button>
              <button id="8" onClick={result}>
                찾기
              </button>
            </div>
          </div>
          <div id="con5">
            테스트
          </div>
        </div>
      </div>
    </>
  );
};
export default Filter;
