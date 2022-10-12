import Main from './screens/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListenerLeak from './screens/ListenerLeak';
import ScopeLeak from './screens/ScopeLeak';
import BigString from './screens/BigString';
import AddRemoveMemoryBuffer from './screens/AddRemoveMemoryBuffer';
import Empty from './screens/Empty';
import AddRemoveMemoryString from './screens/AddRemoveMemoryString';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="Empty" component={Empty} />
        <Stack.Screen name="BigString" component={BigString} />
        <Stack.Screen
          name="AddRemoveMemoryBuffer"
          component={AddRemoveMemoryBuffer}
        />
        <Stack.Screen
          name="AddRemoveMemoryString"
          component={AddRemoveMemoryString}
        />
        <Stack.Screen name="ListenerLeak" component={ListenerLeak} />
        <Stack.Screen name="ScopeLeak" component={ScopeLeak} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
