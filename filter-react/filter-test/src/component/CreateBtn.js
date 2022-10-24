import React from "react";

// function CreateBtn(props){
//   const {className, onClick, disabled, label} = props;
//   return(
//     <button 
//       className={className}
//       onClick={onClick}
//       disabled={disabled}
//     > {label} </button>
//   )
// }

// function CreateBtn({className, onClick, cateName}){
//   return(
//     <input 
//       type="button"
//       className={className}
//       value={cateName} 
//       onClick={onClick} //클릭했을 때 이벤트 지정
//     />
//   )
// }

function CreateBtn({className, onClick, cateName}){
  return(
    <button 
      type="button"
      className={className}
      onClick={onClick} //클릭했을 때 이벤트 지정
    >{cateName}</button>
  )
}
export default CreateBtn;