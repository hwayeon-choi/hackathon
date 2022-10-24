import { View, Text } from 'react-native'
import React from 'react'
import Listbox from './ListBox'

const localJSON = require('../../DB/data.json')

const nameData = localJSON.map((data)=> data.company_name )
// console.log( typeof nameData[3])rㄱ

const typeData = localJSON.map((data) => data.place_type)
// console.log(typeData)

let Arr = []

function nameType(category) {
  for(let i = 0; i<nameData.length; i++) {
    if( typeof nameData[i]==='string' && typeData[i] === category){
      Arr.push(nameData[i])
    }
  }
  console.log(Arr)
  // return Arr
}
nameType("식당");


const CompanyName = () => {

  let nameList = Arr.map((newArr)=>(
    <Listbox 
    name={newArr}
    key={localJSON.place_deatil_id}
    />
    ))

  return nameList

}

export default CompanyName


// function type() {
//   for(let i=0; i<localJSON.length; i++){
//     let typeData = localJSON[i].place_type === "식당"
//     console.log( typeof typeData)
//   }
//   return typeData
// }
// // function nameType() {
// //   if(nameData === "string" && typeData === true){
    
// //   }
// // }
// // type()

// type() 