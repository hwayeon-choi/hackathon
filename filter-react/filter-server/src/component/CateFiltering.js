import React, { useState, useEffect } from "react";
import axios from "axios";

function CateFiltering() {
  const [catedatas, setCatedatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /* api 받는 함수 */
  const FetchFilters = async () => {
    try {
      //요청 초기화
      setError(null);
      setCatedatas([]);
      setLoading(true);

      const res = await axios.get("http://localhost:4000/api/place_detail"); //서버 접속 후 DB연결
      setCatedatas(res.data);
      // console.log(catedatas);
      console.log("fetch Filters");
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchFilters();
  }, []);

  /* 상태,조건,이벤트 설정 */
  //1차 필터 - 지역
  const [regionClick, setregionClick] = useState(null);
  const regions = catedatas.map((item) => item.region);
  const GetRegion = (e) => {
    setregionClick(e.target.value);
  };

  //2차 필터 - 견종
  const [dogClick, setDogClick] = useState(null);
  const dogTypes = catedatas
    .filter((item) => regionClick === item.region)
    .map((item) => item.dog_type);
  const Getdog = (e) => {
    setDogClick(e.target.value);
  };

  //3차 필터 - 장소
  const [placeClick, setplaceClick] = useState(null);
  const placeType = catedatas
    .filter((item) => dogClick === item.dog_type)
    .map((item) => item.place_type);
  const GetPlace = (e) => {
    setplaceClick(e.target.value);
  };

  //결과 리스트 - 업체명
  // const [companyClick, setCompanyClick] = useState(null);
  const companyName = catedatas
    .filter((item) => placeClick === item.place_type && regionClick === item.region && dogClick === item.dog_type)
    .map((item) => item.company_name);
    // const GetCompany = (e) => {
    //   setCompanyClick(e.target.id);
    // };  

  /* 로딩 */
  if (loading) return <div className="loading">Loading...</div>;
  /* 에러 */
  if (error)
    return (
      <div className="err">
        <h3>error</h3>
        <button onClick={FetchFilters}>retry</button>
      </div>
    );
  if (!catedatas) return null;

  /* 출력(마크업) */
  return (
    <div>
      <h3>지역: </h3>
      <select id="region-select" defaultValue="default" onClick={GetRegion}>
        <option value="default" disabled>
          지역을 선택하세요
        </option>
        // ↓ new Set을 하지 않으면 중복제거 안됨
        {[...new Set(regions)].map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <br />

      <h3>견종: </h3>
      <select id="dogType-select" defaultValue="default" onClick={Getdog}>
        <option value="default" disabled>
          견종을 선택하세요
        </option>
        {[...new Set(dogTypes)].map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <br />

      <h3>장소: </h3>
      <select id="place-select" defaultValue="default" onClick={GetPlace}>
        <option value="default" disabled>
          장소를 선택하세요
        </option>
        {[...new Set(placeType)].map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select>
      <br />

      <h3>업체: </h3>
      {/* <select id="company-select" defaultValue="default">
        <option value="default" disabled>
          업체를 선택하세요
        </option>
        {companyName.map((item, idx) => (
          <option value={item} key={idx}>
            {item}
          </option>
        ))}
      </select> */}
      <div>
        {[...new Set(companyName)].map((item, idx) => (
        <button id={item} key={idx}>{item}</button>))}
      </div>
      <br />
    </div>
  );
}

export default CateFiltering;
