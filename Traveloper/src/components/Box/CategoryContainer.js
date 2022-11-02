import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import CompanyName from './CompanyName'


const categoryTab = [
  {
    type: "식당"
  },
  {
    type: "숙박"
  },
  {
    type: "카페"
  },
  {
    type: "공원"
  },
  {
    type: "관광지"
  },
  {
    type: "체험"
  },
  {
    type: "반려동물 편의시설(놀이터)"
  },
  {
    type: "동물병원"
  },
  {
    type: "미용"
  },
  {
    type: "위탁관리업"
  },
]

const CategoryContainer = () => {

  const [type, setType] = useState('식당')

  const setTypeFilter = (type) => {
    // console.log(type);
    setType(type)
  }

  return(
    <>
    {/* 카테고리 버튼 컨테이너 */}
    <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator = {false} 
    style={styles.Container}
    >
      {
        categoryTab.map((data,index) => (
          <TouchableOpacity 
          key={index}
          onPress={()=> setTypeFilter(data.type) }
          style={[styles.categoryTab, type === data.type && styles.categoryAvtive ]}>
            <Text style={[styles.text, type === data.type && styles.textActive]}>{data.type}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
    {/* 리트스 컨테이너 */}
    <ScrollView style = {styles.listContainer}>
      <CompanyName place_type={type}/>
    </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  Container : {
    flexDirection : 'row',
    width : "100%",
    height : 48,
    marginTop : 20,
  },
  listContainer : {
    width : "100%",
    height : "75%",
    marginTop : 24,
  },
  categoryTab : {
    marginRight : 10,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    paddingHorizontal : 24,
    backgroundColor : "#ddd"
  },
  categoryAvtive : {
    backgroundColor : "#6BB8D0"
  },
  text : {
    fontSize : 12,
  },
  textActive : {
    color : "#fff",
    fontWeight : "500"
  }  
});

export default CategoryContainer
