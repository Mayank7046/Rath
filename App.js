import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Rider Screens
import RiderLogin from './screens/rider/RiderLogin';
import RiderHome from './screens/rider/RiderHome';
import RiderBooking from './screens/rider/RiderBooking';

// Driver Screens
import DriverLogin from './screens/driver/DriverLogin';
import DriverHome from './screens/driver/DriverHome';
import DriverAcceptRide from './screens/driver/DriverAcceptRide';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="RiderLogin">
          {/* Rider Screens */}
          <Stack.Screen 
            name="RiderLogin" 
            component={RiderLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="RiderHome" 
            component={RiderHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="RiderBooking" 
            component={RiderBooking}
            options={{ headerShown: false }}
          />

          {/* Driver Screens */}
          <Stack.Screen 
            name="DriverLogin" 
            component={DriverLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="DriverHome" 
            component={DriverHome}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="DriverAcceptRide" 
            component={DriverAcceptRide}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
