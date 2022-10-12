import sizeof from 'object-sizeof';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const MILLION = 1_000_000;
const TEN_MILLION = 10 * MILLION;
const ONE_BYTE = '|';

export default function BigString({}) {
  const memory = new Array(TEN_MILLION).join(ONE_BYTE);
  return (
    <View style={styles.container}>
      <Text>
        Allocated {sizeof(memory) / MILLION}mb, go back to see the memory gets
        garbage collected
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 24,
  },
});
