import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native'; // View, StyleSheet 호출

function Box({rounded, size, color}) { // 구조분해할당
  return (
    <View
    style={[
        styles.box,
        rounded && styles.rounded,
        sizes[size],
        {
         backgroundColor: color,
        },
      ]}
    />
  );
}

Box.defaultProps = { // 디폴트 값
  size: 'medium',
};

const styles = StyleSheet.create({ // CSS
  /* 색상 */
  box: {
    backgroundColor: 'black', // 기본값
  },
  /* 모서리 곡률 */
  rounded: {
    borderRadius: 16,
  },
  /* 미디어쿼리 비슷한거 */
  small: {
    width: 32,
    height: 32,
  },
  medium: {
    width: 64,
    height: 64,
  },
  large: {
    width: 128,
    height: 128,
  },
});

const sizes = {
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
};

export default Box;