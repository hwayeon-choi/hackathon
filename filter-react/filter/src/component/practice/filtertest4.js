import React, { useCallback, useState } from 'react';
import data from '../db/cateData.json';
import placeData from '../db/all.json';

const Filter4 = () => {
  // const [state, setState] = useState(null);
  const [clicked, setClickedState] = useState({
    passingTags: {
      price: {
        lowHigh: false,
        highLow: false
      },
      // color: {
      //   white: false,
      //   black: false,
      //   brown: false,
      //   navy: false,
      //   blue: false,
      //   yellow: false,
      //   pink: false,
      //   purple: false,
      //   beige: false,
      //   red: false,
      //   green: false
      // },
    }
  })
  const GetClick = (e) => {
    // 클릭이벤트1
    console.log('clicked', e.target.name);
    const name = e.target.name;
    setClickedState(prevState => ({
      passingTags:{
        ...prevState.passingTags,
        [name]: value
      }
    }))
  };

  return (
    <>
    <button
    onClick={GetClick}
    name="lowHigh"
    >lowHigh</button>
    <button
    onClick={GetClick}
    name="highLow"
    >highLow</button>
    </>
  )
  }

  export default Filter4;