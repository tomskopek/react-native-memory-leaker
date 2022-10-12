import React, {useEffect, useRef, useState} from 'react';
import {AppState, Text, View} from 'react-native';
import sizeof from 'object-sizeof';

const MILLION = 1_000_000;
const TEN_MILLION = 10 * MILLION;
const ONE_BYTE = '|';

// Credit: https://github.com/software-mansion-labs/react-native-memory-leak-example/blob/master/ListenerLeak.js

export default function ListenerLeak({}) {
  const memory = new Array(TEN_MILLION).join(ONE_BYTE);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();
  const [count, setCount] = useState(0);

  function refresh() {
    setCount(prev => prev + 1);
  }

  useEffect(() => {
    AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        intervalRef.current = setInterval(refresh, 1000);
      } else {
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    });
    intervalRef.current = setInterval(refresh, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <View>
      <Text>
        Allocated {sizeof(memory) / MILLION}mb, go back to see the memory gets
        retained
      </Text>
      <Text>Time counter: {count} sec</Text>
    </View>
  );
}
