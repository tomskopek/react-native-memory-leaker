import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Pressable, Text, View} from 'react-native';
import {Buffer} from 'buffer';
import sizeof from 'object-sizeof';

const MILLION = 1_000_000;
const TEN_MILLION = 10 * MILLION;

export default function AddRemoveMemoryBuffer({}) {
  const [memory, setMemory] = useState<Buffer | null>();

  return (
    <View style={styles.container}>
      <Text>
        Allocated {sizeof(memory) / MILLION}mb, go back to see the memory gets
        garbage collected
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          setMemory(prev => Buffer.alloc(sizeof(prev) + TEN_MILLION));
        }}>
        <Text>Increase Buffer by 10mb</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => {
          setMemory(null);
        }}>
        <Text>Clear Buffer</Text>
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
