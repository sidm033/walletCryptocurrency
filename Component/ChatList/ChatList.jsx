import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem, Avatar} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Color from 'react-native-material-color';
import {Text} from '@rneui/base';

const ChatList = ({navigation}) => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      subtitle: 'Online',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
      subtitle: 'Last seen 7 minutes age',
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://randomuser.me/api/portraits/men/36.jpg',
      subtitle: 'Online',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
      subtitle: 'Online',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
      subtitle: 'Last seen 1 minutes age',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
      subtitle: 'Last seen 2 minutes age',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      subtitle: 'Online',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      subtitle: 'Online',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      subtitle: 'Online',
    },
  ];

  const userChatItem = (item, index) => {
    return (
      <LinearGradient
        colors={['#FFFFFF', '#EDE7F6']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}>
        <View
          style={[index === 0 && styles.containerStyleList, styles.itemStyle]}
          onPress={() => {
            navigation.push('ChatDetails', {
              item: item,
            });
          }}>
          <View>
            <Avatar
              source={{uri: item.avatar_url}}
              size={'medium'}
              avatarStyle={styles.avatarStyle}
            />
            <View style={styles.iconContentStyles}>
              <SimpleLineIcons
                name="check"
                size={12}
                style={styles.iconStyles}
              />
            </View>
          </View>
          <View>
            <Text>{item.name}</Text>
            <View style={styles.userOnlineStatus}>
              <Text>{item.subtitle}</Text>
            </View>
            {item.subtitle === 'Online' && (
              <View style={styles.onlineIconContent}>
                <View style={styles.onlineIconStyle} />
              </View>
            )}
          </View>
        </View>
      </LinearGradient>
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 0,
          // width: "86%",
          // backgroundColor: "#CED0CE",
          // marginLeft: "14%"
        }}
      />
    );
  };

  return (
    <LinearGradient
      colors={['#D1C4E9', '#8C9EFF']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      style={styles.linearGradient}>
      <View style={styles.chatContent}>
        {/* <ScrollView> */}
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={item => {
            return userChatItem(item.item, item.index);
          }}
          ItemSeparatorComponent={renderSeparator()}
        />
        {/* </ScrollView> */}
      </View>
    </LinearGradient>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  chatContent: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    // top: -25,
    height: 700,
  },
  chatLinearGrandStyle: {
    flex: 1,
  },
  containerStyleList: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 25,
  },
  itemStyle: {
    paddingVertical: 15,
    paddingButton: 0,
    paddingHorizontal: 20,
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
  userOnlineStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  onlineIconContent: {
    position: 'relative',
    left: 250,
    top: -12,
  },
  onlineIconStyle: {
    borderWidth: 1,
    borderRadius: 100,
    width: 12,
    height: 12,
    backgroundColor: Color.GREEN[500],
    borderColor: Color.WHITE,
  },
  linearGradient: {
    flex: 1,
  },
});
