/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {Header} from '@rneui/themed';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from 'react-native-material-color';

const AppHeader = props => {
  const {title, item, routeLink, navigation} = props;

  return (
    <Header
      backgroundColor="#FFFFFF"
      containerStyle={{
        height: 100,
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      leftComponent={() => {
        return <Feather name="align-left" size={35} color={Color.GREY[500]} />;
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      centerComponent={() => {
        return (
          <Text
            style={{
              fontSize: 28,
              fontWeight: 'bold',
              color: Color.GREY[800],
            }}>
            {title}
          </Text>
        );
      }}
      // eslint-disable-next-line react/no-unstable-nested-components
      rightComponent={() => {
        return <Ionicons name="wallet" size={33} color={Color.GREY[500]} />;
      }}
    />
  );
};

export default AppHeader;
