import React from 'react';
import {StyleSheet, View, FlatList, SafeAreaView} from 'react-native';
import {Header, Button, Divider, Text} from '@rneui/base';
import Color from 'react-native-material-color';
import LinearGradient from 'react-native-linear-gradient';
import ItemCard from '../Component/ItemCard';

const ProductList = () => {
  const users = [
    {
      name: 'Pease school shirt',
      title: 'Black - L',
      amount: '20.90',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
      name: 'Myrtle Beach Sweater',
      title: 'Blue - M',
      amount: '40.10',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
      name: 'Kings Shirt',
      title: 'Gray - S',
      amount: '50.00',
      avatar:
        'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
    },
    {
      name: 'Eywa Hoodie',
      title: 'Black - L',
      amount: '20.20',
      avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      name: 'andy vitale',
      title: 'White - M',
      amount: '23.90',
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
    {
      name: 'T-Shirt',
      title: 'Black - L',
      amount: '10.90',
      avatar:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
    },
  ];

  return (
    <>
      <View>
        <Header
          placement="left"
          // backgroundColor={'#fff'}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            text: 'My cart',
            style: {
              color: Color.WHITE,
              fontSize: 30,
              fontWeight: 'bold',
              // backgroundColor: '#ffffff',
            },
          }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
      </View>
      <View style={styles.content}>
        <SafeAreaView style={styles.container}>
          <View style={styles.itemList}>
            <FlatList
              data={users}
              renderItem={({item}) => <ItemCard item={item} />}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
        <View style={styles.productCartButton}>
          <View style={styles.cartDivider}>
            <Divider style={styles.divider} width={0} color={Color.GREY[500]} />
          </View>
          <View style={styles.cartItemTotal}>
            <Text style={styles.totalText}> Total</Text>
            <Text style={styles.totalAmount}> {'\u0024'}128.60</Text>
          </View>
          <Button
            title={'Check out'}
            containerStyle={styles.cartButton}
            ViewComponent={LinearGradient} // Don't forget this!
            linearGradientProps={{
              colors: [Color.BLUE[200], Color.BLUE[700]],
              start: {x: 0, y: 0.5},
              end: {x: 1, y: 0.5},
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
  itemList: {
    marginVertical: 1,
    marginBottom: 1,
  },
  cartButton: {
    width: '95%',
    borderRadius: 8,
  },
  addToCartButton: {
    alignItems: 'center',
  },
  cartDivider: {
    marginBottom: 10,
  },
  divider: {
    shadowColor: '#000000',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.8,
  },
  cartItemTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 15,
  },
  totalText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.GREY[600],
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productCartButton: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    paddingTop: 10,
  },
  linearGradient: {
    borderRadius: 5,
  },
});

export default ProductList;
