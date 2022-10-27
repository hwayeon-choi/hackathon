import { View, Text,Pressable, StyleSheet,ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import CompanyName from './CompanyName'



const  CategoryBox = ({text}) => {
  
  const [toggle, setToggle] = useState("#ddd")
  
  const categoryArr = ["식당","숙소","카페","운동장","산책 & 공원"]
  
  
  const changeBg = ()=> {
    console.log(text)

    for(let i=0; i<categoryArr.length; i++){
      if( text === categoryArr[i]) {
        setToggle("#333")
      }
      else if(toggle === "#333") {
        setToggle("#ddd")
      }
    } 
  }
  
    return (
      <Pressable
      onPress={changeBg}
      style={[styles.box,{backgroundColor : toggle? toggle : "#ddd"}]}
      >
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    )
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
  },
  listContainer : {
    width : "100%",
    height : "75%",
    marginTop : 24,
  },
})

export default CategoryBox