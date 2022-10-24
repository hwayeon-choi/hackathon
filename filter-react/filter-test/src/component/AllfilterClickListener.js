import React, { useState } from 'react';
import filteredCategory from './filteredCate';

const AllFilterClickListener = (e, filterProp) => {
  //상태변화
  const [searchState, setSearchState] = useState({
    passingCates: {
      region: {
        seoul: false,
        daegeon: false,
        busan: false,
      },
      place_type: {
        restaurant: false,
        cafe: false,
        pet_hospital: false,
        accomodation: false,
        park: false,
        pet_ground: false,
        grooming_shop: false,
        pet_hotel: false,
        activity: false,
        tour: false,
        pet_rest: false,
      },
      dog_type: {
        small: false,
        middle: false,
        big: false,
      },
    },
  });

  let name = e.target.textContent;
  if (name === "서울특별시") {
    name = "seoul";
  } else if (name === "대전광역시") {
    name = "daegeon";
  } else if (name === "부산광역시") {
    name = "busan";
  } else if (name === "식당") {
    name = "restaurant";
  } else if (name === "카페") {
    name = "cafe";
  } else if (name === "동물병원") {
    name = "pet_hospital";
  } else if (name === "숙박") {
    name = "accomodation";
  } else if (name === "공원") {
    name = "park";
  } else if (name === "애견운동장") {
    name = "pet_ground";
  } else if (name === "미용") {
    name = "grooming_shop";
  } else if (name === "위탁관리업") {
    name = "pet_hotel";
  } else if (name === "체험") {
    name = "activity";
  } else if (name === "관광지") {
    name = "tour";
  } else if (name === "반려동물 편의시설(놀이터)") {
    name = "pet_rest";
  } else if (name === "소형견") {
    name = "small";
  } else if (name === "중형견") {
    name = "middle";
  } else if (name === "대형견") {
    name = "big";
  } else {
    name = e.target.textContent;
  }

  setSearchState({
    passingCates: {
      ...searchState.passingCates,
      [filterProp]: {
        [name]: !searchState.passingCates[filterProp][name],
      },
    },
  });

};

export default AllFilterClickListener;