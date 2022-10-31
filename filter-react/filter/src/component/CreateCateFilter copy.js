import React, { useState } from "react";
import data from "../db/cateData.json"; //카테고리 분류용
import placeData from "../db/all.json"; //장소데이터 전체용
//각 json파일의 공통 키(region, dog_type, place_type)의 값 사용
// import FilterResult from "./cateFilterResult";
import ClickedStyle from "./ClickedStyle";

const CreateCateFilter = () => {

  /* 카테고리별 상태 설정 */
  //지역
  const [regionClick, setregionClick] = useState(null);
  const [regionPrevClick, setRegionPrevClick] = useState(null);
  //견종
  const [dogClick, setDogClick] = useState(null);
  const [dogPrevClick, setDogPrevClick] = useState(null);
  //장소
  const [placeClick, setplaceClick] = useState(null);
  const [placePrevClick, setPlacePrevClick] = useState(null);
  

  /* 이벤트 설정 */
  //지역
  const GetRegion = (e) => {
    setregionClick(e.target.id);
  }
  //견종
  const Getdog = (e) => {
    setDogClick(e.target.id);
  };
  //장소
  const GetPlace = (e) => {
    setplaceClick(e.target.id);
  };


  /* 클릭 상태에 따른 버튼 스타일 변화 */
  // 지역
  React.useEffect( //usecallback으로 변환 가능
    () => {
      ClickedStyle(regionClick, regionPrevClick); //함수 호출
      setRegionPrevClick(regionClick);
    },
    [regionClick] //클릭값이 업데이트 될 때만 실행
  );
  //견종
  React.useEffect(
    () => {
      ClickedStyle(dogClick, dogPrevClick); //함수 호출
      setDogPrevClick(dogClick);
    },
    [dogClick] //클릭값이 업데이트 될 때만 실행
  );
  //장소
  React.useEffect(
    () => {
      ClickedStyle(placeClick, placePrevClick); //함수 호출
      setPlacePrevClick(placeClick);
    },
    [placeClick] //클릭값이 업데이트 될 때만 실행
  );

  /* 결과 찾기 */
  const result = () => {
    //선택한 상태가 아닐 시 null
    //선택한 상태가 있을 시 클릭한 내용 출력
    console.log(regionClick);
    console.log(dogClick); 
    console.log(placeClick); 
    FilterResult2(); //필터링 결과 출력
  }


  /* 찾기버튼(result) 눌렀을 때 필터링되는 함수 */
  const [filterResult, setFilterResult] = useState(null); //1차 필터에서 출력된 결과를 저장
  const FilterResult2 =()=>{
    placeData.filter(item => {
      if(item.region.length > 0 && item.dog_type.length > 0){
        //1차 필터
        if(item.region === regionClick && item.dog_type === dogClick){
          const clickedResult = {...item}
          setFilterResult(clickedResult);
          //2차 필터
          if(clickedResult !== null){
            if(clickedResult.place_type === placeClick){
              console.log(clickedResult);
            }
            else if(placeClick == null || placeClick === '전체'){
              console.log(clickedResult);
            }
          } 
        } 
        // else {console.log('해당하는 값이 없음')}
      } 
    });
  }



/* 초기화 */
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
export default CreateCateFilter;
