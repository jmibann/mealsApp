import React from 'react';
import { useSelector } from 'react-redux'
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from '../components/MealItem';

const MealList = props => {

  const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

  const renderMealItem = itemData => {

    const isFav = favouriteMeals.some(meal => meal.id === itemData.item.id)

    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFav: isFav
            }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});


export default MealList;