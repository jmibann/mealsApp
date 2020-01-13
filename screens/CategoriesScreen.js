import React from 'react';

import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => props.navigation.navigate({ routeName: 'CategoryMeals', params: { categoryId: itemData.item.id } })}
      />
    )
  }


  return (
    <FlatList numColumns={2} keyExtractor={(item, index) => item.id} data={CATEGORIES} renderItem={renderGridItem} />
  )

};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;