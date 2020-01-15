import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const stackNavOptions = {
  // initialRouteName: 'Categories',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      shadowRadius: 15,
      shadowOffset: {
        height: 0,

      }
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans  '
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
  }
}

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        drawerLabel: 'Meals',
        shadowRadius: 15,
        shadowOffset: {
          height: 0,
        }
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        drawerLabel: 'Meals',
        shadowRadius: 15,
        shadowOffset: {
          height: 0,
        }
      }
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        drawerLabel: 'Meals',
        shadowRadius: 15,
        shadowOffset: {
          height: 0,
        }
      }
    }
  },
  { defaultNavigationOptions: stackNavOptions }
);


const FavNavigator = createStackNavigator({
  Favourites: FavouritesScreen,
  MealDetail: MealDetailScreen
},
  { defaultNavigationOptions: stackNavOptions }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: 'Meals',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals'
    }
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites',
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favourites</Text> : 'Favourites'
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android'
  ? createMaterialBottomTabNavigator(
    tabScreenConfig,
    {
      activeColor: 'white',
      shifting: true
    })
  : createBottomTabNavigator(tabScreenConfig,
    {
      tabBarOptions: {
        labelStyle: {
          fontFamily: 'open-sans-bold'
        },
        activeTintColor: Colors.accentColor
      }
    });

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen,
},
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!'
    // },
    defaultNavigationOptions: stackNavOptions
  })


const MainNavigator = createDrawerNavigator({
  MealsFavs:
  {
    screen: MealsFavTabNavigator,
    navigationOptions: {
      drawerLabel: 'Meals',
      shadowRadius: 15,
      shadowOffset: {
        height: 0,
      }
    }
  },
  Filters: FilterNavigator
}, {
  contentOptions: {
    activeTintColor: Colors.accentColor,
    labelStyle: {
      fontFamily: 'open-sans-bold'
    }
  }
});

export default createAppContainer(MainNavigator);
