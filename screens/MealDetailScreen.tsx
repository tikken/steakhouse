import React, { useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import DetailItem from '../components/DetailItem';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'
//
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavourite } from '../store/actions/meals';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const allMeals = useSelector(state => state.meals.meals )
    const selectedMeal = allMeals.find(meal => meal.id === mealId)
    const isFavouriteMeal = useSelector(state => state.meals.favouriteMeals.some(el => el.id === mealId));

    const dispatch = useDispatch()

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFavourite(mealId))
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavHandler, isFav: isFavouriteMeal })
    }, [toggleFavHandler, isFavouriteMeal])

    const selected = allMeals.find(meal => meal.id === mealId)

    return <DetailItem details={selected}/>
};

MealDetailScreen.navigationOptions = (navData) => {
    const mealTitle = navData.navigation.getParam('mealTitle');
    const toggleFavourite = navData.navigation.getParam('toggleFav');

    const isFav = navData.navigation.getParam('isFav');
    let icon = isFav ? 'ios-heart' : 'ios-heart-empty';

    return {
        headerTitle: mealTitle,
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favourite"
                    iconName={icon}
                    onPress={toggleFavourite} />
            </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    color: {
        paddingRight: 20,
        color: 'yellow'
    }
});

export default MealDetailScreen;