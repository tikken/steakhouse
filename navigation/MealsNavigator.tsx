import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from "../screens/MealDetailScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import FiltersScreen from '../screens/FiltersScreen';
import colors from "../constants/colors";

const styles = StyleSheet.create({
    ionicons: {
        paddingTop: 5
    }
});
//настройки по умолчанию
const defaultOpts = {
    defaultNavigationOptions: {
        headerTitle: 'Steakhouse',
        headerBackTitle: '',
        headerStyle: {
            backgroundColor: colors.primaryColor
        },
        headerTintColor: colors.accentColor,
        headerTitleStyle: {
            fontFamily: 'meat',
            fontSize: 30
        }
    }};
//экраны из фаворитов
const FavouritesNavigator = createStackNavigator({
    Favourites: FavouritesScreen,
    MealDetail: MealDetailScreen
},defaultOpts);
//основная навигация
const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen
        },
        CategoryMeals: {
            screen: CategoryMealsScreen
        },
        MealDetail: MealDetailScreen
    },defaultOpts);
//обьединение настроек и путей
const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return (
                    <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} style={styles.ionicons} />
                );
            },
            tabBarColor: colors.primaryColor
        }
    },
    Favorites: {
        screen: FavouritesNavigator,
        navigationOptions: {
            tabBarIcon: tabInfo => {
                return <Ionicons name="ios-heart-empty" size={25} color={tabInfo.tintColor} style={styles.ionicons} />;
            },
            tabBarColor: colors.accentColor
        }
    }
};
//навигция под большим пальцем
const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: colors.primaryColor
            }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: colors.accentColor,
                labelStyle: {
                    fontFamily: 'meat',
                    fontSize: 20
                }
            }
        });
//путь для фильтров
const FilterNavigator = createStackNavigator({
    screen: FiltersScreen
}, defaultOpts);

//боковое меню
const drawerOptions = {
    contentOptions: {
        activeTintColor: colors.accentColor,
        labelStyle: {
            fontFamily: 'meat',
            fontSize: 40
        }
    }
};

const MainNavigator = createDrawerNavigator({
    Favourites: MealsFavTabNavigator,
    Filters: FilterNavigator
}, drawerOptions);

export default createAppContainer(MainNavigator);
