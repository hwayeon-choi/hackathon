import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, TextInput} from "react-native";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { ChevronDownIcon,ArrowPathRoundedSquareIcon } from 'react-native-heroicons/outline'
import Location from "./customButton/Location";




const Filter = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

fetch('http://localhost:4000/api/locationdata')
.then(response=> response.json())
.then(data=>console.log(data))
.catch(err=> console.log(err))

  return (
    <View style={[styles.centeredView,{backgroundColor: "rgba(0,0,0,0)"}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View 
        style={styles.centeredView}
        >
          <View style={styles.modalView}>
            {/* 아래화살표 */}
            <Pressable onPress={()=> setModalVisible(!modalVisible)}>
            <ChevronDownIcon size={24} color={"#000"}/>
            </Pressable>
            {/* 여행날짜 선택하기 */}
            <Pressable style={styles.date}>
              <Text style={{fontSize:14,color : "#8F8F8F"}}>여행 날짜 선택하기</Text>
            </Pressable>
            {/* 여행지역 선택하기 */}
            <Pressable style={styles.location}>
              <Text style={{fontSize:16,color : "#000",fontWeight : "500"}}>어디로 떠나시나요?</Text>
              <Location/>
            </Pressable>

            {/* 강아지정보 */}
            <Text style= {{
              width :"100%",
              fontSize:16,color : "#000",
              fontWeight : "500"
              }}>강아지 정보</Text>
            {/* 소형견 */}
            <View style={styles.dogContainer}>
            <Pressable style={styles.dog}>
              <Text style={{fontSize:14,color : "#000",fontWeight : "500"}}>소형견</Text>
            </Pressable>

            {/* 중형견 */}
            <Pressable style={styles.dog}>
              <Text style={{fontSize:14,color : "#000",fontWeight : "500"}}>중형견</Text>
            </Pressable>

            {/* 대형견 */}
            <Pressable style={styles.dog}>
              <Text style={{fontSize:14,color : "#000",fontWeight : "500"}}>대형견</Text>
            </Pressable>
            </View>

            {/* 결과보기 리셋 버튼 컨테이너 */}
            <View style={{
              flexDirection : 'row', 
              width: "100%", 
              justifyContent:'space-between'
              }}
              >

              {/*리셋 버튼 */}    
              <Pressable 
              style={styles.fillterReset}
              >
                <ArrowPathRoundedSquareIcon color={"#8F8F8F"}/>
              </Pressable>

              {/* 결과보기 버튼 */}
              <Pressable 
              style={styles.fillterSelect}
              onPress={()=> setModalVisible(!modalVisible)}
              >
                <Text style={{
                  fontSize:14,
                  color : "#fff",
                  fontWeight : "500", 
                  marginRight:10
                  }}
                  >결과보기
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}
      >
        <MagnifyingGlassIcon color={"#ccc"}/>
        <Text style={styles.input}>어디로 떠나시나요?</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor : "rgba(2,2,2,0.5)"
  },
  modalView: {
    width : '100%',
    height : "82%",
    backgroundColor : "#ddd",
    borderTopLeftRadius : 15,
    borderTopRightRadius : 15,
    paddingHorizontal : 20,
    paddingTop : 20,
    alignItems : "center"
  },
  buttonOpen: {
    width : 276,
    backgroundColor : "#F9FbFc",
    borderRadius : 30,
    borderColor : "#e0e0e0",
    borderWidth : 1,
    padding : 16,
    flexDirection : "row",
    height :50,
    left :50,
    alignItems : "center"
  },
  input: {
    color: "#ddd", 
    fontWeight:"500", 
    fontSize : 14,
    marginLeft : 10
  },
  date : {
    backgroundColor : "#EBEBEB",
    width : "100%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center'
  },
  location : {
    backgroundColor : "#EBEBEB",
    width : "100%",
    height : 260,
    marginTop : 16,
    borderRadius : 10,
    marginBottom : 16,
    paddingHorizontal : 16,
    paddingVertical : 24
  },
  dog : {
    backgroundColor : "#EBEBEB",
    width : "30%",
    height : 60,
    marginTop : 16,
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 16
  },
  dogContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    width : "100%",
    height : 60,
    marginBottom : 16,
  },
  fillterReset : {
    backgroundColor : "#ccc",
    width : 60,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
    marginRight : 16,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 24,
  },
  fillterSelect : {
    backgroundColor : "#000",
    flex : 1,
    height : 60,
    color : "#FFF",
    borderRadius : 10,
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 24,
  },
});

export default Filter;