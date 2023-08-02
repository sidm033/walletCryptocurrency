import React, {useState} from 'react';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import Color from 'react-native-material-color';
import Icon from 'react-native-vector-icons/AntDesign';

const ItemCard = ({item}) => {
  const [timesPressed, setTimesPressed] = useState(1);

  return (
    <View style={styles.content}>
      <View style={styles.imageItem}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{uri: item.avatar}}
        />
      </View>
      <View style={styles.textContent}>
        <View style={styles.textTitle}>
          <Text style={styles.itemTitle}>{item.name}</Text>
        </View>
        <Text style={styles.itemSubtitleTitle}>{item.title}</Text>
        <View style={styles.amountContent}>
          <Text style={styles.itemAmount}>
            {'\u0024'}
            {item.amount}
          </Text>
          <View style={styles.productMinusIcon}>
            <Pressable
              onPress={() => {
                setTimesPressed(current => current - 1);
              }}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Icon name="minus" size={10} color={Color.BLACK} />
            </Pressable>
          </View>
          <View style={styles.productAdd}>
            <Text style={styles.timesPressed}> {timesPressed} </Text>
          </View>
          <View style={styles.productIcon}>
            <Pressable
              onPress={() => {
                setTimesPressed(current => current + 1);
              }}
              style={({pressed}) => [
                {
                  backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
                },
                styles.wrapperCustom,
              ]}>
              <Icon name="plus" size={10} color={Color.BLACK} />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  imageItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  image: {
    width: 80,
    height: 90,
    marginRight: 10,
    borderRadius: 10,
  },
  textContent: {
    paddingTop: 19,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    // paddingBottom: 1,
    color: Color.BLACK,
  },
  itemSubtitleTitle: {
    fontSize: 12,
    paddingVertical: 1,
  },
  amountContent: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  productMinusIcon: {
    position: 'relative',
    top: 9,
    left: 20,
    fontWeight: 'bold',
  },
  productAdd: {
    paddingHorizontal: 6,
    marginLeft: 40,
    width: 35,
    marginRight: 10,
    backgroundColor: Color.GREY[300],
    height: 20,
    marginTop: 4,
    alignItems: 'center',
  },
  textTitle: {
    paddingBottom: 1,
  },
  itemAmount: {
    color: Color.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 100,
    paddingTop: 5,
  },
  productIcon: {
    position: 'relative',
    top: 9,
    fontWeight: 'bold',
    // left: 10,
  },
  timesPressed: {
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
