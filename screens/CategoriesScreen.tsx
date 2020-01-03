import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryGridTile from '../components/CategoryGridTile';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridTile
                    title={itemData.item.title}
                    color={itemData.item.color}
                    onSelect={() => {
                        props.navigation.navigate({routeName: 'CategoryMeals', params: {
                                categoryId: itemData.item.id
                            } })
                    }}
                />
    }

    return (
       <FlatList
           keyExtractor={(item, index) => item.id}
           data={CATEGORIES}
           renderItem={renderGridItem}
           numColumns={2} />
    );
};

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal categories',
        headerLeft: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    color="red"
                    title="Menu"
                    iconName="ios-menu"
                    onPress={() => {console.log(navData.navigation.toggleDrawer())}} />
            </HeaderButtons>
    }
};

export default CategoriesScreen;