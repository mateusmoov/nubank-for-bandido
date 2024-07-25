import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Bait from './screens/Bait';
import {NativeModules} from 'react-native';
import '@react-native-firebase/app';
import {ROUTES, RoutesParams} from './types/routes';

const Stack = createNativeStackNavigator<RoutesParams>();
const {VolumeControl} = NativeModules;

const App = () => {
  React.useEffect(() => {
    VolumeControl.setVolumeToMax();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.BAIT} component={Bait} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
