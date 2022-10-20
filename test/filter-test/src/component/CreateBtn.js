import React from "react";

function CreateBtn(props){
  const {className, onClick, disabled, label} = props;
  return(
    <button 
      className={className}
      onClick={onClick}
      disabled={disabled}
    > {label} </button>
  )
}

export default CreateBtn;