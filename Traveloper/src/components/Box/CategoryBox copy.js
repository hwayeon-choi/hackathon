import { View, Text,Pressable, StyleSheet } from 'react-native'
import React,{useState, useEffect} from 'react'
import CompanyName from './CompanyName'


const  CategoryBox = () => {
  
  const categoryArr = ["식당","숙소","카페","운동장","산책&공원"]
  
  let bgColor = ""
  let categoryTab = categoryArr.map((data,index)=>{
    return (
      <Pressable 
      key={index}
      onPress={()=> {
        console.log(data)
        // console.log(index)
        
        for(let i=0; i<categoryArr.length; i++){
          if(data !== categoryArr[i]){
            bgColor = "rgba(200,200,200,1)"
            // console.log("불일치")
          } else {
            bgColor = "rgba(20,20,20,1)"
            // console.log("일치")
          }
          console.log(categoryTab[2].props.style[1])
        }
        return bgColor
      }}
      style={[styles.box,{backgroundColor : bgColor? bgColor : "#ddd"}]}
      >
        <Text style={styles.text}>{data}</Text>
      </Pressable>
    )
  })
  return categoryTab
}

const styles = StyleSheet.create({
  box : {
    marginRight : 10,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
  },
  text : {
    color : "#aaa",
    paddingHorizontal : 20
  }
})

export default CategoryBox