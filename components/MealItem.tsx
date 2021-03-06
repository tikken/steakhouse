import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Dimensions
} from 'react-native';
import DefaultText from '../components/DefaultText';

const w = Dimensions.get('window');

const MealItem = ({onSelectMeal, title, duration, complexity, affordability, image}:
                  {onSelectMeal:any, title: string, duration: string, complexity: string, affordability: string, image:string}) => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={onSelectMeal} >
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: image}} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <DefaultText style={styles.title}>
                                {title}
                            </DefaultText>
                            <View style={styles.row}>
                                <DefaultText style={styles.desc}>
                                    {duration}
                                </DefaultText>
                                <DefaultText style={styles.desc}>
                                    {complexity}
                                </DefaultText>
                                <DefaultText style={styles.desc}>
                                    {affordability}
                                </DefaultText>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </View>

        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    desc: {
        color: 'white',
        textAlign: 'center',
        marginLeft: 12
    },
    row: {
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0, .5)',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    heading: {
        fontSize: 20,
        paddingHorizontal: 15,
        color: 'white'
    },
    title: {
        fontSize: 15,
        paddingHorizontal: 15,
        paddingVertical: 5,
        color: 'white',
        textAlign: 'center'
    },
    bgImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        height: 300,
        backgroundColor: '#f5f5f5',
        margin: 15
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '100%'
    },
    mealDetail: {
        justifyContent: 'space-between'
    }
});

export default MealItem;