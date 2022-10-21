import React from "react";
import data from "../db/all.json";

// function JsonTest(){
//   return (
//     <ul className='region'>
//       {data.map((datas)=> (
//         <li key={datas.place_detail_id}>
//           {datas.region}
//         </li>
//       ))}
//     </ul>
//   );
// }

function JsonTest() {

  // const getCateNamedata = function(){
  //   const set = [];
  //   for(let i=0; i<data.length; i++){
  //     let getNames = Object.values(data[i]);
  //     for (let j = 0; j < getNames.length; j++) {
  //       set.push(data[j]);
  //       return set;
  //     }
  //   }
  // };
  const test =()=> {
    const set = [];
    {data.map((datas) => (
      set.push(Object.keys(datas))
      ))};
      // console.log(set)
      const newSet = new Set(set);
      const newArr = [...newSet];
      console.log(newArr);
  }

  const onClick = () => {
    //클릭했을 때 이벤트..
    console.log("clicked");
    test(); //객체 전부 뜸 
  };

  return (
    <span>
      {data.map((datas) => (
        <button
          className="region"
          key={datas.place_detail_id}
          onClick={onClick} //클릭했을 때 이벤트 지정
        >
          {datas.region}
        </button>
      ))}
    </span>
  );
}

export default JsonTest;
