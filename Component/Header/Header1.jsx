import React from 'react';
import {Header, Avatar} from '@rneui/themed';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from 'react-native-material-color';

const AppHeader1 = props => {
  const {title, item, routeLink, navigation} = props;
  console.log(routeLink);
  const activeIcon = {
    text: title,
    style: {
      color: Color.GREY[800],
      fontSize: 25,
      paddingBottom: 10,
      fontWeight: 'bold',
    },
  };

  const activeBackButton = () => {
    return (
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <View style={styles.backButton}>
          <AntDesignIcon
            name="leftcircleo"
            size={20}
            style={styles.iconStyles}
          />
        </View>
      </Pressable>
    );
  };

  const simpleRightComponent = {
    icon: 'search',
    color: Color.GREY[800],
    size: 30,
    paddingRight: 20,
    paddingTop: 8,
  };

  const simpleRightComponentIcon = () => {
    return (
      <View style={styles.rightDotButton}>
        <Entypo name="dots-three-vertical" size={20} color={Color.GREY[800]} />
      </View>
    );
  };

  const ChatUserInfo = () => {
    return (
      <View style={styles.headerUser}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.backButton}>
            <AntDesignIcon
              name="leftcircleo"
              size={20}
              color={Color.GREY[800]}
            />
          </View>
        </Pressable>
        <View>
          <Avatar
            source={{uri: item?.avatar_url}}
            size={'medium'}
            avatarStyle={styles.avatarStyle}
          />
          <View style={styles.iconContentStyles}>
            <SimpleLineIcons name="check" size={11} style={styles.iconStyles} />
          </View>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.nameStyles}>{item.name}</Text>
          <Text style={styles.subTitleStyles}>{item.subtitle}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {routeLink === 'ChatList' && (
        <Header
          statusBarProps={{
            barStyle: 'light-content',
            colors: ['#D1C4E9', '#8C9EFF'],
            backgroundColor: 'transparent',
          }}
          leftComponent={activeIcon}
          rightComponent={simpleRightComponent}
          containerStyle={styles.content}
          leftContainerStyle={styles.leftContainerStyle}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#D1C4E9', '#8C9EFF'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
        />
      )}

      {routeLink === 'ChatDetails' && (
        <Header
          statusBarProps={{
            barStyle: 'light-content',
            colors: ['#D1C4E9', '#8C9EFF'],
            backgroundColor: 'transparent',
          }}
          leftComponent={ChatUserInfo()}
          rightComponent={simpleRightComponentIcon()}
          containerStyle={styles.content}
          leftContainerStyle={styles.leftContainerStyle}
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#D1C4E9', '#8C9EFF'],
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
          }}
          // centerComponent={ChatUserInfo()}
        />
      )}

      {routeLink === 'DashboardOne' && (
        <Header
          backgroundColor="#FFFFFF"
          centerComponent={{
            text: 'Wallets',
            style: {
              color: '#424242',
              fontSize: 22,
            },
          }}
          leftComponent={() => {
            return <Feather name={'align-left'} size={30} />;
          }}
          placement="center"
          rightComponent={() => {
            return <Ionicons name={'wallet'} size={30} color={Color.GREY[500]} />;
          }}
        />
      )}
    </>
  );
};

export default AppHeader1;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#3D6DCC',
    height: 100,
  },
  leftContainerStyle: {
    paddingLeft: 15,
    flex: 2,
  },
  avatarStyle: {
    borderRadius: 200,
  },
  iconContentStyles: {
    position: 'relative',
    left: 35,
    top: -15,
    borderRadius: 100,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLUE[500],
    borderColor: Color.WHITE,
  },
  iconStyles: {
    color: Color.WHITE,
  },
  iconDotStyles: {
    color: Color.GRAY,
  },
  headerUser: {
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    top: -15,
  },
  rightDotButton: {
    position: 'relative',
    paddingLeft: 0,
    paddingRight: 20,
  },
  backButton: {
    position: 'relative',
    top: 13,
    paddingLeft: 0,
    paddingRight: 20,
  },
  userOnlineStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlineIconContent: {
    position: 'relative',
    left: 250,
    top: -12,
  },
  userDetails: {
    position: 'relative',
    paddingLeft: 10,
    marginRight: 0,
  },
  nameStyles: {
    fontWeight: 'bold',
    color: Color.BLACK,
  },
  subTitleStyles: {
    // flex: 1,
  },
});
