import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import sizeof from 'object-sizeof';

const MILLION = 1_000_000;
const TEN_MILLION = 10 * MILLION;
const ONE_BYTE = '|';

export default function AddRemoveMemoryString({}) {
  const [memory, setMemory] = useState<string | null>("");

  return (
    <View style={styles.container}>
      <Text>
        Allocated {sizeof(memory) / MILLION}mb, go back to see the memory gets
        garbage collected
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          setMemory(prev => prev + new Array(TEN_MILLION).join(ONE_BYTE));
        }}>
        <Text>Increase string size by ~10mb</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          setMemory(null);
        }}>
        <Text>Clear stored string</Text>
      </Pressable>
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
  button: {
    padding: 8,
    borderWidth: 1,
    margin: 4,
  },
});
