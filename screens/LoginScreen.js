import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BorderedInput from '../Components/BorderedInput';
import CustomButton from '../Components/CustomButton';

function LoginScreen() {
  return (
    <SafeAreaView style={styles.fullscreen}>
      <View style={styles.form}>
        {/* 입력 폼 */}
        <BorderedInput hasMarginBottom />
        {/* 버튼 */}
        <View style={styles.buttons}>
          <CustomButton title="로그인" hasMarginBottom />
          <CustomButton title="회원가입" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
  buttons: {
    marginTop: 64,
  },
});

export default LoginScreen;