import React from "react";

function Filterbtn({region}){
  return(
    <button 
      className={region.value}
    > {region.name} </button>
  )
}

function RegionList(){
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

  return(
    <div>
      {regions.map(region => (
        <Filterbtn region={region} />
      ))}
    </div>
  )
}

export default RegionList;