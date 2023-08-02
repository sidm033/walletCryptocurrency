/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Color from 'react-native-material-color';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard = () => {
  const itemList = [
    {
      icon: 'bitcoin',
      backgroundColor: '#FFB74D',
      BTCNumber: '3.529020 BTC',
      price: '$19.153',
      currentPrice: '$ 5.441',
      currentPriceStatus: '+ 4.32%',
      currentPriceColor: Color.GREEN[500],
    },
    {
      icon: 'dollar',
      backgroundColor: '#7E57C2',
      BTCNumber: '2.529010 DOLL',
      price: '$19.153',
      currentPrice: '$ 2.441',
      currentPriceStatus: '+ 2.32%',
      currentPriceColor: Color.GREEN[500],
    },
    {
      icon: 'inr',
      backgroundColor: '#64B5F6',
      BTCNumber: '1.529020 E',
      price: '$19.153',
      currentPrice: '$ 5.441',
      currentPriceStatus: '+ 4.32%',
      currentPriceColor: Color.RED[500],
    },
    {
      icon: 'euro',
      backgroundColor: '#4DB6AC',
      BTCNumber: '0.129020 EU',
      price: '$29.153',
      currentPrice: '$ 6.441',
      currentPriceStatus: '+ 6.32%',
      currentPriceColor: Color.GREEN[500],
    },
    {
      icon: 'gbp',
      backgroundColor: '#81C784',
      BTCNumber: '0.029020 GBP',
      price: '$10.153',
      currentPrice: '$ 1.441',
      currentPriceStatus: '+ 2.32%',
      currentPriceColor: Color.GREEN[500],
    },
  ];

  // eslint-disable-next-line react/no-unstable-nested-components
  const ProductItem = ({item}) => {
    return (
      <View style={styles.contentItem}>
        <View
          style={[
            styles.bitcoinIconContentStyle,
            {backgroundColor: item.backgroundColor},
            {paddingLeft: item.icon === 'bitcoin' ? 8 : 10},
          ]}>
          <FontAwesome
            name={item.icon}
            size={27}
            style={styles.bitcoinIconStyle}
            color={Color.WHITE}
          />
        </View>
        <View style={styles.itemPriceContent}>
          <View style={styles.itemNumberBTC}>
            <Text style={styles.itemBTCSLNumber}> {item.BTCNumber} </Text>
            <Text style={styles.itemBTCPrice}>{item.price}</Text>
          </View>
          <View style={styles.itemNumberBTCPrice}>
            <Text style={styles.itemNumberBTCCurrentPrice}>
              {' '}
              {item.currentPriceStatus}{' '}
            </Text>
            <Text
              style={[
                styles.itemNumberBTCCurrentPriceUpdate,
                {color: item.currentPriceColor},
              ]}>
              {' '}
              + 4.32%
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.content}>
      <View style={styles.boxContent}>
        <View style={styles.boxContentTitle}>
          <View style={styles.walletIconContent}>
            <Ionicons
              name="wallet"
              size={19}
              color={Color.WHITE}
              style={styles.walletIconStyle}
            />
          </View>
          <Text style={styles.contentTextTotalWalet}> TotalWalet Balance </Text>
          <View style={styles.boxContentRight}>
            <Text style={styles.textUSD}>USD</Text>
            <EvilIcons
              name="chevron-down"
              size={30}
              style={styles.chevronDownIcon}
              color={Color.GREY[500]}
            />
          </View>
        </View>
        <View style={styles.boxContentPrice}>
          <Text style={styles.contentPriceOne}> $39.584 </Text>
          <Text style={styles.contentPriceSecond}> +3.55% </Text>
        </View>
        <Text style={styles.boxContentPriceBTC}> 7.251332 BTC </Text>
        <Entypo
          name="chevron-thin-down"
          size={30}
          style={styles.chevronThisDownIconStyle}
          color={Color.GREY[500]}
        />
      </View>
      <View style={styles.itemTitleContent}>
        <Text style={styles.itemTitleShortByHigher}> Sorted by higher % </Text>
        <View style={styles.itemTitleContentHour}>
          <Text style={styles.itemContent24H}> 24H </Text>
          <EvilIcons
            name="chevron-down"
            size={25}
            style={styles.chevronDownContentIcon}
            color={Color.GREY[500]}
          />
        </View>
      </View>
      <ScrollView>
        {itemList.map((item, index) => (
          <ProductItem key={index.toString()} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  boxContent: {
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 25,
    backgroundColor: Color.WHITE,
    elevation: 5,
  },
  boxContentTitle: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  walletIconContent: {
    borderWidth: 1,
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: Color.GREY[800],
  },
  walletIconStyle: {
    paddingLeft: 11,
    paddingTop: 10,
  },
  boxContentRight: {
    flexDirection: 'row',
    marginLeft: 80,
  },
  contentTextTotalWalet: {
    paddingLeft: 15,
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 7,
  },
  textUSD: {
    marginTop: 8,
    fontWeight: 'bold',
    color: Color.GREY[500],
  },
  chevronDownIcon: {
    marginTop: 2,
  },
  boxContentPrice: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 10,
  },
  contentPriceOne: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.GREY[800],
  },
  contentPriceSecond: {
    marginLeft: 120,
    width: 70,
    height: 23,
    borderRadius: 25,
    backgroundColor: Color.GREEN[600],
    paddingTop: 2,
    paddingLeft: 7,
    color: Color.WHITE,
  },
  boxContentPriceBTC: {
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 17,
    color: Color.GREY[500],
  },
  chevronThisDownIconStyle: {
    marginLeft: 170,
    marginTop: 30,
    marginBottom: 20,
  },
  itemTitleContent: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTitleContentHour: {
    flexDirection: 'row',
  },
  chevronDownContentIcon: {
    position: 'relative',
    left: -7,
    top: -3,
  },
  itemContent24H: {
    color: Color.GREY[500],
  },
  itemTitleShortByHigher: {
    color: Color.GREY[500],
  },
  contentItem: {
    marginTop: 20,
    marginHorizontal: 20,
    height: 80,
    flexDirection: 'row',
    backgroundColor: Color.WHITE,
    elevation: 5,
    borderRadius: 15,
  },
  bitcoinIconContentStyle: {
    width: 43,
    height: 43,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 25,
    paddingTop: 2,
  },
  bitcoinIconStyle: {
    paddingTop: 6,
    paddingLeft: 4,
  },
  itemNumberBTC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemNumberBTCPrice: {
    flexDirection: 'row',
  },
  itemPriceContent: {
    paddingTop: 20,
  },
  itemBTCSLNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemBTCPrice: {
    marginLeft: 80,
    fontWeight: 'bold',
  },
  itemNumberBTCCurrentPrice: {
    color: Color.GREY[500],
  },
  itemNumberBTCCurrentPriceUpdate: {
    marginLeft: 140,
  },
});
