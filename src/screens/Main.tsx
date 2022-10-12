import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Pressable, StyleSheet, Text, View} from 'react-native';

declare var global: any;

export default function Main({}) {
  const navigation = useNavigation<any>();
  const gcName = global.HermesInternal.getRuntimeProperties().GC;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h1}>Screens</Text>

      <View style={styles.section}>
        <Text style={styles.h2}>No leaks</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Empty');
          }}>
          <View style={styles.button}>
            <Text>Empty Screen</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('BigString');
          }}>
          <View style={styles.button}>
            <Text>Loads ~10mb string in memory</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('AddRemoveMemoryBuffer');
          }}>
          <View style={styles.button}>
            <Text>Add/Remove Memory (Buffer)</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('AddRemoveMemoryString');
          }}>
          <View style={styles.button}>
            <Text>Add/Remove Memory (string)</Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Memory leaks</Text>
        <Pressable
          onPress={() => {
            navigation.navigate('ListenerLeak');
          }}>
          <View style={styles.button}>
            <Text>Listener Leak</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ScopeLeak');
          }}>
          <View style={styles.button}>
            <Text>Scope Leak (TODO)</Text>
          </View>
        </Pressable>
      </View>
      <Text>Using "{gcName}" garbage collector</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 24,
  },
  h1: {
    fontSize: 24,
    fontWeight: '600',
    paddingBottom: 24,
  },
  h2: {
    fontSize: 18,
    fontWeight: '600',
    paddingBottom: 18,
    textAlign: 'center',
  },
  section: {
    marginVertical: 18,
    width: '100%',
  },
  button: {
    padding: 8,
    borderWidth: 1,
    margin: 4,
  },
});
