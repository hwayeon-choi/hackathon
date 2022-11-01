import { View, Text, StyleSheet, Modal, TextInput, Pressable, ScrollView, Button, Alert } from 'react-native'
import React,{useState} from 'react'

const [modalVisible, setModalVisible] = useState('false')

const HashTag = () => {
  return (
    // <View style={styles.root}>
    <Modal 
    animationType='slide'
    transparent = {true}
    visible = {modalVisible}
    onRequestClose={()=> {
      Alert.alert("Modal has been closed.");
      setModalVisible(!modalVisible);
    }}
    >
      {/* 해시태그 박스 컨테이너 */}
      <View style={styles.container}>

        {/* 해시태그 검색 인풋 */}
        <TextInput placeholder='해시태그 검색' style={styles.input}/>

        {/* 선택된 해시태그 텍스트 */}
        <Text style={styles.text}>선택된 해시태그</Text>

        {/* 선택된 해시태그 박스 컨테이너 */}
        <ScrollView 
        horizontal={true} 
        showsHorizontalScrollIndicator = {false}
        style={styles.hashTagButtonContainer}
        >
          <Pressable style={styles.hashTagButtonSelected}><Text style={styles.hashTagTextSelected}>#감성</Text></Pressable>
          <Pressable style={styles.hashTagButtonSelected}><Text style={styles.hashTagTextSelected}>#조용한</Text></Pressable>
          <Pressable style={styles.hashTagButtonSelected}><Text style={styles.hashTagTextSelected}>#독채</Text></Pressable>
        </ScrollView>

        {/* 인기 해시태그 텍스트 */}
        <Text style={styles.text}>인기 해시태그</Text>

        {/* 인기 해시태그 박스 컨테이너 */}
        <ScrollView 
        style={styles.hashTagButtonContainer}
        horizontal={true} 
        showsHorizontalScrollIndicator = {false} 
        >
          <Pressable style={styles.hashTagButtonPopular}><Text style={styles.hashTagTextPopular}>#글램핑</Text></Pressable>
          <Pressable style={styles.hashTagButtonPopular}><Text style={styles.hashTagTextPopular}>#UTV</Text></Pressable>
          <Pressable style={styles.hashTagButtonPopular}><Text style={styles.hashTagTextPopular}>#독채</Text></Pressable>
          <Pressable style={styles.hashTagButtonPopular}><Text style={styles.hashTagTextPopular}>#기상천외한</Text></Pressable>
          <Pressable style={styles.hashTagButtonPopular}><Text style={styles.hashTagTextPopular}>#오션뷰</Text></Pressable>
        </ScrollView>

        {/* 해시태그 검색 버튼 */}

        <Pressable
        onPress={()=> setModalVisible(true)} 
        style={styles.submit}>
          <Text style={styles.submitText}>선택완료</Text>
        </Pressable>
      </View>
    </Modal>
    // </View>
  )
}

const styles = StyleSheet.create({
  // root : {
  //   flex:1,
  //   justifyContent : 'center',
  //   alignItems : "center",
  //   backgroundColor : "#-"
  // },
  container : {
    width : 350,
    height : 423,
    backgroundColor : "#ddd",
    borderRadius : 10,
    paddingHorizontal : 20,
    paddingTop : 48,
    paddingBottom : 20,
    justifyContent : 'center',
  },
  input : {
    width : "100%",
    backgroundColor : "#F9FbFc",
    borderRadius : 10,
    borderColor : "#e0e0e0",
    borderWidth : 1,
    justifyContent : 'center',
    paddingHorizontal : 16,
    height : 48
  },
  hashTagButtonContainer : {
    width : "100%",
    height : 40,
    flexDirection : "row",
  },
  hashTagButtonSelected : {
    height: 45,
    backgroundColor : "#000",
    borderRadius : 10,
    marginRight : 10,
    justifyContent:'center',
    alignItems : 'center'
  },
  hashTagButtonPopular : {
    height: 45,
    backgroundColor : "#b5b5b5",
    borderRadius : 10,
    marginRight : 10,
    justifyContent:'center',
    alignItems : 'center'
  },
  text : {
    fontSize : 14,
    fontWeight : "700",
    color : "#838383",
    marginTop : 24,
    marginBottom : 16
  },
  submit : {
    width : "100%",
    backgroundColor : "#000",
    borderRadius : 10,
    borderWidth : 1,
    justifyContent : 'center',
    alignItems:'center',
    height : 50,
    // marginTop : 48
  },
  submitText : {
    color : "#fff",
    fontSize :12,
    fontWeight : "900"
  },
  hashTagTextSelected : {
    color : "#fff",
    marginHorizontal: 12
  },
  hashTagTextPopular : {
    color : "#606060",
    marginHorizontal: 12
  }
})

export default HashTag