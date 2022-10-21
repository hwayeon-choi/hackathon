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
  const onClick = () => {
    //클릭했을 때 이벤트..
    console.log("clicked");
    // console.log(datas);
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
