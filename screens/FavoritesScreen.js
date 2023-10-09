import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import {useContext} from 'react'
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
    // const favoriteMealsCtx = useContext(FavoritesContext)
    const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids)

    // const mealIsFavorite = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
    const mealIsFavorite = MEALS.filter(meal => favoriteMealIds.includes(meal.id))

    if(mealIsFavorite.length === 0) {
       return  <View style={styles.rootContainer}>
            <Text style={styles.text}>You have no favorite meals yet.</Text>
        </View>
    }
    return(
        <MealsList items={mealIsFavorite}/>
    )
}
export default FavoritesScreen;
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})