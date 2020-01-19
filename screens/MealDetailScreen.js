import React, { useEffect, useCallback } from 'react';

import { StyleSheet, View, Text, Button, ScrollView, Image, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector, useDispatch } from 'react-redux';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavourite } from '../store/actions/meal';

import Colors from '../constants/Colors'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>
        {props.children}
      </DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {

  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam('mealId');
  const currentMealIsFavourite = useSelector(state => state.meals.favouriteMeals.some(meal => meal.id === mealId))

  const selectedMeal = availableMeals.find(meal => meal.id = mealId);

  const dispatch = useDispatch();

  const toggleFavouriteHandler = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId])

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title })
    props.navigation.setParams({ toggleFav: toggleFavouriteHandler })
  }, [toggleFavouriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavourite })
  }, [currentMealIsFavourite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View>
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
      </View>
      <View style={styles.screen}>
        {/* <Text>{selectedMeal.title}</Text> */}

        <Text style={styles.title}>Ingredients</Text>
        {
          selectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}

        <Text style={styles.title}>Steps</Text>
        {/* <Text>{selectedMeal.steps}</Text> */}
        {
          selectedMeal.steps.map((step, index) => (
            <ListItem key={step}>{index + 1}- {step}</ListItem>
          ))}

        {/* <Button title="Go to Categories!" onPress={() => { props.navigation.popToTop() }} /> */}
      </View>
    </ScrollView >
  )

};

MealDetailScreen.navigationOptions = navigationData => {

  const mealTitle = navigationData.navigation.getParam('mealTitle');
  const toggleFavourite = navigationData.navigation.getParam('toggleFav');
  const isFav = navigationData.navigation.getParam('isFav');


  return {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitle: mealTitle,
    headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Favourite' iconName={isFav ? 'ios-star' : 'ios-star-outline'} onPress={() => toggleFavourite()} />
    </HeaderButtons>,
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10
  }
});


export default MealDetailScreen;