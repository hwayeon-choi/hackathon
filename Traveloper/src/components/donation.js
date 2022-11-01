import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import CustomButton from './customButton/customButton'

const Donation = () => {

  const onDonation = () => {
    console.warn("나의 기부금액")
  }

  return (
    <View style={styles.Donation}>
      <View style={styles.DonationTotal}>
        <Text style={[{fontSize : 16, fontWeight : "700", color : "#6BB8D0", marginRight : 8}]}>132,345</Text>
        <Text style={[{fontSize : 16, fontWeight : "700", color : "#686868", marginRight : 8}]}>원</Text>
      </View>
      <View style={styles.DonationMenuContainer}>
        <Text style={[{fontSize : 16, fontWeight : "700", color : "#555555"}]}>나의 기부금액</Text>
        <View style={styles.MidBar}></View>
        <Text style={[{fontSize : 16, fontWeight : "500", color : "#555555"}]}>포인트 잔액</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  DonationTotal : {
    width : "100%",
    height : 59,
    backgroundColor : "#FFF",
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'flex-end',
    alignItems : 'center',
    padding : 16,
  },
  Donation : {
    backgroundColor : "#D9D9D9",
    height : 146,
    width : "100%",
    marginTop : 16,
    padding : 20,
    borderRadius : 10,
    justifyContent : 'space-between'
  },
  DonationMenuContainer : {
    width : "100%",
    height : 59,
    // marginTop : 10,
    borderRadius : 10,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    padding : 18,
  },
  MidBar : {
    width : 2,
    height : 27,
    backgroundColor : "#FFF"
  },
})

export default Donation