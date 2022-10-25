import React, { useState } from "react";
import data from "../db/cateData.json"; //카테고리 분류용
import placeData from "../db/all.json"; //장소데이터 전체용
//각 json파일의 공통 키(region, dog_type, place_type)의 값 사용
// import FilterResult from "./cateFilterResult";

const CreateCateFilter = () => {

  /* 카테고리별 상태 설정 */
  //지역
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);


  /* 이벤트 설정 */
  //지역
  const GetRegion = (e) => {
    setCurrentClick(e.target.id);
  };
  //견종
  const Getdog = (e) => {
    setCurrentClick(e.target.id);
  };
  //장소
  const GetPlace = (e) => {
    setCurrentClick(e.target.id);
  };

  /* 클릭 상태에 따른 버튼 변화 */
  // 지역
  React.useEffect(
    () => {
      if (currentClick !== null) {
        let getId = document.getElementById(currentClick);
        getId.style.backgroundColor = "#6BB8D0";
        getId.style.border = "1px solid #6C6C6C";
      }

      if (prevClick !== null) {
        let prevId = document.getElementById(prevClick);
        prevId.style.backgroundColor = "#E5E5E5";
        prevId.style.border = "1px solid #6C6C6C";
      }

      setPrevClick(currentClick);
    },
    [currentClick] //클릭값이 업데이트 될 때만 실행
  );


  /* 결과 찾기 */
  const result = () => {
    //선택한 상태가 아닐 시 null
    //선택한 상태가 있을 시 클릭한 내용 출력
    console.log(currentClick);
    FilterResult(); //필터링 결과 출력
  }

  /* 찾기버튼(result) 눌렀을 때 필터링되는 함수 */
  const FilterResult =()=>{
    placeData.filter(item => {
      //1차 필터 : 지역,견종
      if(item.region === currentClick && item.dog_type === currentClick){
        // console.log(item);
        //2차 필터 : 장소
        if(item.place_type !== null){
          //값이 null이 아닐 때는 1차 필터 내용 전체 출력
          console.log(item);
        }
        if(item.place_type === currentClick){
          //값이 있을 때는 2차까지 걸러서 출력
          // console.log(item);
        } 
      }
    });
  }

/* 초기화 */
  const refreshBtn = () => {
    console.log("초기화");
    console.log(setCurrentClick(null));
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
