import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Color from 'react-native-material-color';

const DashboardOne = () => {
  return (
    <View style={styles.content}>
      <View style={styles.boxContent}>
        <View style={styles.boxTopContent}>
          <Ionicons
            name="wallet"
            size={24}
            style={styles.boxTopIconWalletStyle}
            color={Color.WHITE}
          />
          <Text style={styles.boxContentTopTitle}> Total Walet Balance </Text>
          <View style={styles.boxTopRightContent}>
            <Text style={styles.boxContentTopRightTitle}> USD</Text>
            <AntDesign
              name="down"
              size={12}
              style={styles.boxTopDownIconStyle}
              color={Color.GREY[600]}
            />
          </View>
        </View>
        <View style={styles.boxContentPrice}>
          <Text style={styles.boxContentPriceLeft}> $39.584</Text>
          <Text style={styles.boxContentPriceRight}> +3.55% </Text>
        </View>
        <Text style={styles.boxContentPriceSub}> 7.251332 BTCY </Text>
        <View style={styles.boxChevronDownIcon}>
          <Entypo
            name="chevron-thin-down"
            size={30}
            style={styles.chevronDownIcon}
          />
        </View>
      </View>
      <View style={styles.itemContent}>
        <Text style={styles.itemContentTitle}> Sorted by higher %</Text>
        <View style={styles.itemContentLeft}>
          <Text style={styles.itemContentTitleSub}> 24H </Text>
          <Entypo
            name="chevron-small-down"
            size={23}
            style={styles.chevronDownSmallIcon}
            color={Color.GREY[500]}
          />
        </View>
      </View>
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <View style={styles.priceItemList}>
            <View style={styles.priceItemListContent}>
              <View style={styles.bitcoinIconContent}>
                <FontAwesome
                  name={'bitcoin'}
                  size={30}
                  style={styles.bitcoinIcon}
                  color={Color.WHITE}
                />
              </View>
              <View style={styles.priceItemTitle}>
                <Text style={styles.priceItemTitleText}>3.529020 BTC </Text>
                <Text style={styles.priceItemTitleSubText}>$19.153 </Text>
              </View>
            </View>
            <View style={styles.priceItemSub}>
              <Text style={styles.priceItemSubTextTitle}>$ 5.441 </Text>
              <Text style={styles.priceItemSubText}> + 4.32%</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardOne;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  boxContent: {
    backgroundColor: Color.WHITE,
    marginHorizontal: 20,
    marginTop: 30,
    height: 200,
    borderRadius: 15,
    elevation: 5,
  },
  boxTopIconWalletStyle: {
    borderRadius: 25,
    backgroundColor: '#263238',
    width: 50,
    height: 50,
    paddingLeft: 15,
    paddingTop: 11,
  },
  boxTopDownIconStyle: {
    paddingTop: 5,
  },
  boxContentTopTitle: {
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 16,
    color: Color.GREY[800],
  },
  boxTopContent: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 10,
  },
  boxTopRightContent: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 50,
  },
  boxContentTopRightTitle: {
    paddingRight: 10,
    fontWeight: 'bold',
    color: Color.GREY[400],
  },
  boxContentPrice: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
  },
  boxContentPriceLeft: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Color.GREY[800],
  },
  boxContentPriceRight: {
    fontSize: 15,
    marginLeft: 130,
    width: 70,
    height: 30,
    paddingTop: 4,
    borderRadius: 19,
    paddingLeft: 5,
    backgroundColor: Color.GREEN[600],
    color: Color.WHITE,
  },
  boxContentPriceSub: {
    paddingLeft: 15,
    color: Color.GREY[500],
    fontWeight: 'bold',
  },
  boxChevronDownIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  chevronDownIcon: {
    fontWeight: 'bold',
  },
  itemContent: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  itemContentTitle: {
    color: Color.GREY[500],
  },
  itemContentLeft: {
    flexDirection: 'row',
    marginLeft: 170,
  },
  itemContentTitleSub: {
    color: Color.GREY[500],
  },
  image: {
    width: 40,
    height: 40,
  },
  priceItemList: {
    marginHorizontal: 20,
    marginTop: 20,
    height: 85,
    justifyContent: 'center',
    borderRadius: 20,
    elevation: 5,
    backgroundColor: Color.WHITE,
  },
  priceItemListContent: {
    flexDirection: 'row',
  },
  priceItemTitle: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 2,
  },
  priceItemSub: {
    flexDirection: 'row',
    marginTop: -25,
    marginLeft: 90,
  },
  priceItemTitleText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  priceItemTitleSubText: {
    fontSize: 15,
    marginLeft: 80,
    fontWeight: 'bold',
  },
  priceItemSubTextTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.GREY[500],
  },
  priceItemSubText: {
    fontSize: 15,
    marginLeft: 125,
    fontWeight: 'bold',
    color: Color.GREEN[600],
  },
  bitcoinIconContent: {
    height: 50,
    width: 50,
    marginLeft: 20,
    borderRadius: 25,
    position: 'relative',
    top: -2,
    backgroundColor: '#FFB74D',
  },
  bitcoinIcon: {
    paddingTop: 8,
    paddingLeft: 13,
  },
});
