import { View, Text,Pressable, StyleSheet } from 'react-native'
import React,{useState} from 'react'


const CategoryBox = ({text}) => {
  const [toggle, setToggle] = useState(false)
  
  const changeBgc =  () => {
    setToggle(current => !current)
  }
  return (
    <Pressable
    onPress={changeBgc}
    style= {{
      backgroundColor : toggle ? '#333' : '#ddd',
      marginRight : 10,
      borderRadius : 10,
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <Text style={{
        color : toggle ? '#ddd' : '#333',
        paddingHorizontal : 20
      }}>{text}</Text>
    </Pressable>
  )
}

// const styles = StyleSheet.create({
//   button : {
//     backgroundColor : toggle,
//     marginRight : 10,
//     borderRadius : 10,
//     justifyContent : 'center',
//     alignItems : 'center',
//   },
//   text : {
//     color : '#ddd',
//     paddingHorizontal : 20
//   }
// })


export default CategoryBox

