import React, {useCallback, useRef, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Dimensions,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Image, Text, SearchBar, Card} from '@rneui/base';
import Color from 'react-native-material-color';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {ScalingDot} from 'react-native-animated-pagination-dots';

const DashboardLatest = () => {
  const users = [
    {
      name: 'Rush shirt',
      amount: '$12.90',
      amountWas: '$10.00',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
    {
      name: 'Comfort Jacket',
      amount: '$12.90',
      amountWas: '$10.00',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
    {
      name: 'Comfort Jacket',
      amount: '$12.90',
      amountWas: '$10.00',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
  ];

  const usersCategory = [
    {
      name: 'Woman',
      items: '123',
      icon: 'female',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
    {
      name: 'Man',
      items: '103',
      icon: 'male',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
    {
      name: 'Man',
      items: '723',
      icon: 'male',
      avatar:
        'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
    },
  ];

  const keyExtractor = useCallback((item, index) => index, []);

  return (
    <ScrollView>
      <View style={styles.content}>
        <GestureHandlerRootView>
          <Carousel
            horizontal
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {
                useNativeDriver: true,
              },
            )}
            loop
            width={width}
            height={500}
            autoPlay={false}
            data={[...new Array(3).keys()]}
            scrollAnimationDuration={1000}
            onSnapToItem={index => console.log('current index:', index)}
            pagingEnabled={true}
            renderItem={({index}) => (
              <View style={styles.mainContent}>
                <Image
                  source={require('./../../assets/images/butterfly-2.jpeg')}
                  containerStyle={styles.itemImage}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <View style={styles.searchItem}>
                  <SearchBar
                    placeholder="What are you looking for?"
                    onChangeText={setSearchValue}
                    value={searchValue}
                    lightTheme={true}
                    // round={true}
                    containerStyle={styles.contentStyles}
                    searchIcon={true}
                    inputContainerStyle={styles.searchInputContentStyle}
                  />
                </View>
                <View style={styles.bannerContent}>
                  <Text style={styles.recommendationText}>Recommendations</Text>
                  <Text style={styles.womenText}>Women Blue denim</Text>
                  <View style={styles.amountContent}>
                    <Text style={styles.amountText}>$30.99</Text>
                    <Text style={styles.discountAmount}>$44.99</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </GestureHandlerRootView>
        <View style={styles.paginationDots}>
          <ScalingDot
            data={[...new Array(3).keys()]}
            scrollX={scrollX}
            useNativeDriver={true}
            inActiveDotOpacity={0.5}
            dotStyle={styles.dotStyle}
            containerStyle={styles.dotsContentStyles}
            activeDotScale={1.5}
            // curPage={2}
            // activeDotColor={Color.BLUE[700]}
            // inActiveDotColor={Color.GREY[700]}
          />
        </View>
        <View style={styles.userContent}>
          <View style={styles.userText}>
            <Text style={styles.trending}> Trending</Text>
            <Text style={styles.showAll}> Show All</Text>
          </View>
          <ScrollView horizontal disableIntervalMomentum={true}>
            <View style={styles.cardStyles}>
              {users.map((u, i) => {
                return (
                  <Card
                    paddingHorizontal={0}
                    paddingVertical={0}
                    // borderRadius={15}
                    borderTopLeftRadius={15}
                    borderTopRightRadius={15}
                    key={i.toString()}
                    marginHorizontal={7}
                    wrapperStyle={styles.cardWrapperStyle}
                    cardContainerStyle={styles.cardContainerStyle}>
                    <View style={styles.cardImageStyles}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: u.avatar}}
                      />
                    </View>
                    <View style={styles.userName}>
                      <Text style={styles.name}>{u.name}</Text>
                    </View>
                    <View style={styles.userAmount}>
                      <Text style={styles.amount}> {u.amount}</Text>
                      <Text style={styles.amountWas}> {u.amountWas}</Text>
                    </View>
                  </Card>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View style={styles.categoryContent}>
          <View style={styles.userText}>
            <Text style={styles.trending}> Categorys</Text>
            <Text style={styles.showAll}> Show All</Text>
          </View>
          <SafeAreaView style={styles.categoryCardStyles}>
            {usersCategory.map((u, i) => {
              return (
                <Card
                  paddingHorizontal={0}
                  paddingVertical={0}
                  borderRadius={9}
                  key={i.toString()}
                  wrapperStyle={styles.cardCategoryWrapperStyle}
                  cardContainerStyle={styles.cardContainerStyle}>
                  <View style={styles.categoryAvatarIcon}>
                    <FontistoIcon name={u.icon} size={28} color={Color.BLACK} />
                  </View>
                  <View style={styles.categoryItemGroup}>
                    <Text style={styles.categoryName}> {u.name}</Text>
                    <Text style={styles.categoryItems}> [{u.items} Items]</Text>
                  </View>
                  <View style={styles.rightIconStyles}>
                    <FontAwesomeIcon
                      name="angle-right"
                      size={23}
                      color={Color.GREY[700]}
                    />
                  </View>
                </Card>
              );
            })}
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardLatest;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  itemImage: {
    width: '100%',
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerContent: {
    paddingLeft: 10,
    position: 'relative',
    top: -150,
  },
  amountContent: {
    flexDirection: 'row',
  },
  recommendationText: {
    fontSize: 13,
    color: Color.GREY[500],
    fontWeight: 'bold',
  },
  womenText: {
    fontSize: 30,
    color: Color.WHITE,
    fontWeight: 'bold',
  },
  amountText: {
    fontSize: 20,
    color: Color.BLUE[500],
    paddingRight: 30,
    fontWeight: 'bold',
  },
  discountAmount: {
    fontSize: 18,
    color: Color.GREY[500],
    textDecorationLine: 'line-through',
    fontWeight: 'bold',
  },
  searchItem: {
    position: 'relative',
    top: -350,
    paddingHorizontal: 10,
  },
  userText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  contentStyles: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    // borderRadius: 12,
  },
  user: {
    width: 120,
    paddingLeft: 0,
  },
  image: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: '100%',
    height: 100,
  },
  userContent: {
    top: -100,
  },
  cardWrapperStyle: {
    width: 120,
    height: 150,
  },
  cardContainerStyle: {
    // width: 20,
    // backgroundColor: 'red',
    // paddingLeft: 0,
    // paddingLeft: 15,
    // marginRight: 5,
    // marginTop: 10,
    // borderRadius: 10, // adds the rounded corners
    // backgroundColor: '#fff',
  },
  cardStyles: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    marginHorizontal: 8,
  },
  userAmount: {
    flexDirection: 'row',
    marginLeft: 6,
  },
  amount: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  amountWas: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    paddingTop: 3,
    color: Color.GREY[500],
  },
  cardImageStyles: {
    // position: 'relative',
    // top: -15,
    // left: -15,
    // paddingLeft: 10,
  },
  userName: {
    paddingLeft: 10,
    paddingTop: 3,
  },
  name: {
    fontSize: 13,
    fontWeight: 'bold',
    color: Color.GREY[500],
  },
  trending: {
    color: Color.GREY[900],
    fontWeight: 'bold',
  },
  showAll: {
    color: Color.BLUE[500],
    fontWeight: 'bold',
    fontSize: 11,
  },
  categoryContent: {
    top: -80,
  },
  categoryCardStyles: {
    flexDirection: 'column',
  },
  cardCategoryWrapperStyle: {
    width: 360,
    height: 50,
  },
  categoryItemGroup: {
    position: 'absolute',
    flexDirection: 'row',
    paddingTop: 15,
    paddingLeft: 55,
    // paddingRight: 30,
  },
  rightIconStyles: {
    paddingLeft: 330,
    paddingTop: 11,
    position: 'absolute',
  },
  categoryAvatarIcon: {
    paddingTop: 10,
    paddingLeft: 23,
    // paddingRight: 10,
  },
  categoryName: {
    paddingRight: 8,
    fontWeight: 'bold',
    color: Color.GREY[600],
  },
  categoryItems: {
    color: Color.GREY[500],
  },
  searchInputContentStyle: {
    height: 40,
  },
  paginationDots: {
    position: 'relative',
    top: -90,
  },
  dotStyle: {
    width: 6,
    height: 6,
    backgroundColor: 'red',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  dotsContentStyles: {
    top: -30,
    color: 'red',
  },
});
