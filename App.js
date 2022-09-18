import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FavItems from './components/FavItems';
import AnimeListing from './components/AnimeListing';
import TabsNavigator from './components/TabsNavigator';
import AnimeSingleDetailsList from './components/AnimeSingleDetailsList';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

{/* Add Drawer.Navigation to a function.*/}
function AnimeListings() {
  return (
    <View>
      <AnimeListing />
    </View>
  );
}

function FavouriteListing() {
  return (
    <View>

    <FavItems />

    </View>
  );
}

function Root() {
  return (
    <Drawer.Navigator
    initialRouteName="Home">

      {/* bottom tabs withing drawer */}
    <Drawer.Screen
            name="Tabs"
            component={TabsNavigator}
            options={{
              drawerLabel: () => <Text
              style={{
                fontWeight: '700',
                // fontSize: hp(3.5),
                fontSize: 24,
                color: 'black',
              }}>
              Catalog
            </Text>,
              title: null,
              drawerIcon: () => null,
            }}
          />

    <Drawer.Screen name="Anime Listing" component={AnimeListings} />
    <Drawer.Screen name="Favourite View" component={FavItems} />   
    
  </Drawer.Navigator>
  );
}

function App () {
 
 
  // custom bottom navigation bar for botttom
  const Tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen options={{
        }} name="Root" component={Root} 
        options={{ headerShown: false }}
         /> 
        <Stack.Screen name="AnimeSingleDetailsList" component={AnimeSingleDetailsList} />
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};


export default App;
