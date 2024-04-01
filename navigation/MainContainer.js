import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcons from 'react-native-vector-icons/Ionicons';

// Import Screens

import HomeScreen from './screens/ListScreen';
import FavScreen from './screens/FavScreen';
import SplashScreen from './screens/SplashScreen';

// Screen Names

const listName = "Shows"
const favName = "Favorites"
const splashName = "Home"

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={splashName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === splashName) {
              iconName = focused ? 'home' : 'home-outline';

            }else if (rn === listName) {
              iconName = focused ? 'list' : 'list-outline';

            }else if (rn === favName) {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }


            // You can return any component that you like here!
            return <IonIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
        }}>

        <Tab.Screen name={splashName} component={SplashScreen} />
        <Tab.Screen name={listName} component={HomeScreen} />
        <Tab.Screen name={favName} component={FavScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}