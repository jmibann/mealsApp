import React from 'react';
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import HeaderButton from '../components/HeaderButton'
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

import Colors from '../constants/Colors';

const FavouriteScreen = props => {

  const favMeals = useSelector(state => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favourites meals found
        </DefaultText>
      </View>
    )
  }

  return (
    <MealList listData={favMeals} navigation={props.navigation} />
  )

};

FavouriteScreen.navigationOptions = navData => {

  return ({
    headerTitle: 'Your favourites',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
    </HeaderButtons>
  })
}


const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default FavouriteScreen;

