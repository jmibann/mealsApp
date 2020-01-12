import React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {

  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id = mealId)

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Text>{selectedMeal.ingredients}</Text>
      <Text>{selectedMeal.steps}</Text>

      <Button title="Go to Categories!" onPress={() => { props.navigation.popToTop() }} />
    </View>
  )

};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favourite' iconName='ios-star' onPress={() => { console.log('mark as favourite') }} />
      <Item title='Favourite' iconName='ios-star-outline' onPress={() => { console.log('mark as favourite outline') }} />
    </HeaderButtons>
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default MealDetailScreen;