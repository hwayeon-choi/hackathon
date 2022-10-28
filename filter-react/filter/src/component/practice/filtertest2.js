import React, { useState } from 'react';


const Filter2 = () => {

  // const { isOpen, setIsOpen } = props;
  // const ModalClose = () => {
  //   setIsOpen(!isOpen)
  // }

  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);
  const [rentClick, setRentClick] = useState(null);
  const [rentPrevClick, setRentPrevClick] = useState(null);


  const GetClick = (e) => {
    setCurrentClick(e.target.id);
    // console.log(e.target.id);
  };
    const GetRent = (e) => {
      setRentClick(e.target.id)
  };

  React.useEffect(
    (e) => {
      if (currentClick !== null) {
        let current = document.getElementById(currentClick);
        console.log(current.innerHTML); 
        //클릭한 메뉴1번 출력
        current.style.backgroundColor = "#E3E3E3";
        current.style.border = "1px solid #6C6C6C";
      }

      if (prevClick !== null) {
        let prev = document.getElementById(prevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }

      setPrevClick(currentClick);
    }, [currentClick]);

  React.useEffect(
    (e) => {
      if (rentClick !== null) {
        let rent = document.getElementById(rentClick);
        console.log(rent.innerHTML);
        //클릭한 메뉴2번 출력
        rent.style.backgroundColor = "#E3E3E3";
        rent.style.border = "1px solid #6C6C6C";
      }

      if (rentPrevClick !== null) {
        let prev = document.getElementById(rentPrevClick);
        prev.style.backgroundColor = "#fff";
        prev.style.border = "1px solid #E6E7E8";
      }

      setRentPrevClick(rentClick);
    }, [rentClick]);

  const findOffice = () => {
    console.log(currentClick) 
    //선택한 상태가 아닐 시 null
    //선택한 상태가 있을 시 클릭한 id 출력
    console.log(rentClick) //선택한 상태가 아닐 시 null
  }
  const refreshBtn = () => {
    console.log('초기화')
    console.log(setCurrentClick(null))
    console.log(setRentClick(null))

  }
  return (
    <>
      <div>
        <h2>가격</h2>
        <div id = 'con1'>
          <h4>보증금(전세금)</h4>
          <div>
            <button
              id="1"
              onClick={GetClick}
            >1천만원 이하</button>
            <button
              id="2"
              onClick={GetClick}
            >1천만원 대</button>
            <button
              id="3"
              onClick={GetClick}
            >2천만원 대</button>
          </div>
        </div>
        <div id = 'con2'>
          <h4>월세</h4>
          <div>
            <button
              id="4"
              onClick={GetRent}
            >100만</button>
            <button
              id="5"
              onClick={GetRent}
            >200만</button>
            <button
              id="6"
              onClick={GetRent}
            >300만</button>
          </div>
        </div>
        <div id = 'con2'>
          <div>
            <button
              id="7"
              onClick={refreshBtn}
            >가격재설정</button>
            <button
              id="8"
              onClick={findOffice}
            >매물찾기</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Filter2;
