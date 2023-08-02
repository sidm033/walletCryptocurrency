/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import ChatList from '../ChatList/ChatList';
import ChatDetails from '../ChatList/ChatDetails';
import AppHeader1 from '../Header/Header1';
import DashboardOne from '../Dashboard/DashboardOne';
import Dashboard from '../Dashboard/Dashboard';
import AppHeader from '../Header/Header';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: ({navigation, scene}) => (
              <AppHeader
                title="Wallets"
                item={''}
                navigation={navigation}
                scene={scene}
                routeLink="Dashboard"
              />
            ),
          }}
        />
        <Stack.Screen
          name="DashboardOne"
          options={{
            header: ({navigation, scene}) => (
              <AppHeader1
                title={'Contact'}
                item={''}
                navigation={navigation}
                scene={scene}
                routeLink={'DashboardOne'}
              />
            ),
          }}
          component={DashboardOne}
        />
        <Stack.Screen
          name="ChatList"
          options={{
            header: ({navigation, scene}) => (
              <AppHeader1
                title={'Contact'}
                item={''}
                navigation={navigation}
                scene={scene}
                routeLink={'ChatList'}
              />
            ),
          }}
          component={ChatList}
        />
        <Stack.Screen
          name="ChatDetails"
          options={{
            header: ({navigation, scene, route}) => (
              <AppHeader1
                title={route.params?.name}
                item={route.params?.item}
                navigation={navigation}
                scene={scene}
                routeLink={'ChatDetails'}
              />
            ),
          }}
          component={ChatDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
