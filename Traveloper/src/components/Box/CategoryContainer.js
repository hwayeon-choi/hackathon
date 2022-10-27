import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import CategoryBox from './CategoryBox'
import CompanyName from './CompanyName'

const CategoryContainer = () => {
  
  // console.log()
  
  return(
    <>
    <ScrollView 
    horizontal={true} 
    showsHorizontalScrollIndicator = {false} 
    style={styles.Container}
    >
      <CategoryBox text={"식당"}></CategoryBox>
      <CategoryBox text={"숙소"}></CategoryBox>
      <CategoryBox text={"카페"}></CategoryBox>
      <CategoryBox text={"운동장"}></CategoryBox>
      <CategoryBox text={"산책 & 공원"}></CategoryBox>
    </ScrollView>
    
    <ScrollView style = {styles.listContainer}>
    <CompanyName 
    region_name={"서울특별시"}
    dog_type={"소형견"}
    place_type={"카페"} 
    />
  </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  Container : {
    flexDirection : 'row',
    width : "100%",
    height : 48,
    marginTop : 16,
  },
  listContainer : {
    width : "100%",
    height : "75%",
    marginTop : 24,
  },
});

export default CategoryContainer