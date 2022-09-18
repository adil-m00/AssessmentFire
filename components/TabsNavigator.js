import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useState} from 'react';
import Airing from './Airing';
import Complete from './Complete';
import UpComming from './UpComing';
import {View,Image} from  'react-native'

function TabsNavigator({navigation}) {
  
function Airings()
{
    return(
        <Airing />
    )
}

function Completes()
{
    return(
        <Complete />
    )
}

function UpCommings()
{
    return(
        <UpComming />
    )
}
 

  const Tab = createBottomTabNavigator();

  const tabBarListeners = ({navigation, route}) => ({
    
  });
  return (
    <Tab.Navigator initialRouteName={'Airing'}>
        <Tab.Screen name="Airing" component={Airings}
         options={{
            // tabBarVisible:false,
            tabBarIcon: ({focused}) => (
              <View>
                  <View
                    style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../assets/wind.png')}
                      resizeMode="contain"
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 21,
                        height: 21,
                        tintColor: focused ? '#4A1E9E' : '#748c94',
                      }}
                    />
                  
                  </View>
                
              </View>
            ),
          }}
           />
        <Tab.Screen name="Complete" component={Completes} 
        options={{
            // tabBarVisible:false,
            tabBarIcon: ({focused}) => (
              <View>
                  <View
                    style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../assets/checked.png')}
                      resizeMode="contain"
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 21,
                        height: 21,
                        tintColor: focused ? '#4A1E9E' : '#748c94',
                      }}
                    />
                  
                  </View>
                
              </View>
            ),
          }}/>
        <Tab.Screen name="Upcoming" component={UpCommings}
        options={{
            // tabBarVisible:false,
            tabBarIcon: ({focused}) => (
              <View>
                  <View
                    style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                    }}>
                    <Image
                      source={require('../assets/wallclock.png')}
                      resizeMode="contain"
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 21,
                        height: 21,
                        tintColor: focused ? '#4A1E9E' : '#748c94',
                      }}
                    />
                  
                  </View>
                
              </View>
            ),
          }} />
    </Tab.Navigator>
  );
}

export default TabsNavigator;
