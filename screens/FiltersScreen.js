import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import { Switch } from 'react-native-paper';
import { setFilters } from '../store/actions/meal';

const FilterSwitch = props => {

  return (
    <View style={styles.filtersContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  )
}

const FilterScreen = props => {

  const { navigation } = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isVegan, setIsVegan] = useState(false);

  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      vegan: isVegan,
      vegetarian: isVegetarian,
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
    }

    dispatch(setFilters(appliedFilters));

  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch])

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters])

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filters/ Restrictions</Text>
      <FilterSwitch label='Gluten free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
      <FilterSwitch label='Lactose free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
      <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
      <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />
    </View>
  )

};

FilterScreen.navigationOptions = navData => {
  return ({
    headerTitle: 'Filter Meals',
    headerStyle: { backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '' },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
    </HeaderButtons>),
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Save' iconName='ios-save' onPress={navData.navigation.getParam('save')} />
    </HeaderButtons>)
  })
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  }
});

export default FilterScreen;