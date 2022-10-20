import React from "react";

// function Category({ cate }) {
//   return (
//     <button
//       className={cate.value}
//     > {cate.name} </button>
//   )
// };

function Category({ region }) {
  return (
    <button
      className={region.value}
    > {region.name} </button>
  )
}


function CreateCate() {
  const regions = [
    {
      name: '전체',
      value: 'all'
    },
    {
      name: '서울특별시',
      value: 'seoul'
    },
    {
      name: '대전광역시',
      value: 'daegeon'
    },
    {
      name: '부산광역시',
      value: 'busan'
    },
  ];

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

  return (
    <div>
      {regions.map((region, index) => {
        <Category
          region={region}
          key={index}
        />
      })}
    </div>
  )
}

export default CreateCate;