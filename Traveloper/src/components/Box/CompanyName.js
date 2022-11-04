import React from 'react'
import Listbox from './ListBox'


const CompanyName = ({place_type = {place_type}, region_name, dog_type, navigation}) => {
  
  const localJSON = require('../../DB/data.json')
  const nameData = localJSON.map((data)=> data.company_name)
  // console.log(nameData)
  const typeData = localJSON.map((data) => data.place_type)
  // console.log(typeData)
  const regionData = localJSON.map((data)=> data.region)
  const dogData = localJSON.map((data)=>data.dog_type)
  
  let Arr = []
  
  function nameType(category, region, dogtype) {
    for(let i = 0; i<nameData.length; i++) {
      if(
        typeData[i] === category 
        // && regionData[i] === region 
        // && dogData[i] === dogtype 
        ){
        Arr.push(nameData[i])
      }
    }
  }
  nameType(place_type,region_name, dog_type);

  let nameList = Arr.map((newArr,index)=>(
    <Listbox 
      navigation={navigation} 
      name={newArr}
      key={index}/>
    ))
  return nameList
}

export default CompanyName
