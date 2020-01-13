import React from 'react';

import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {

  const catId = props.navigation.getParam('categoryId');

  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData) => {
    return (<MealItem
      title={itemData.item.title}
      image={itemData.item.imageUrl}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      onSelectMeal={() => {
        props.navigation.navigate({
          routerName: 'MealDetail', params: {
            mealId: itemData.item.id
          }
        })
      }}
    />)
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )

};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0)

  return {
    headerTitle: selectedCategory.title,
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealsScreen;