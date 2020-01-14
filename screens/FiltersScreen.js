import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

import JoyagesButton from '../components/JoyagesButton'

const FilterScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Filter Screen!</Text>
      <JoyagesButton
        isWorking={false}
        text='SIGN IN'
        onPress={() => console.log('button pressed')}
        solid={false}
      />
    </View>
  )

};

FilterScreen.navigationOptions = navData => {
  return ({
    headerTitle: 'Filter Meals',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : 'black',
    headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} />
    </HeaderButtons>
  })
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FilterScreen;