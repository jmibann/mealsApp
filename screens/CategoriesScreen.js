import React from 'react';

import { StyleSheet, View, Text, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem} onPress={() => { props.navigation.navigate({ routeName: 'CategoryMeals' }) }}>
        <View >
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} />
  )

};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'black'


}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,

  }
});

export default CategoriesScreen;