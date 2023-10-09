import { View, Pressable, Text, StyleSheet, Platform } from "react-native"

function CategoryGridTile({title, color, onPress, navigation}) {
    return(
        <View style={[styles.girdItem]}>
            <Pressable
                android_ripple = {{color: '#ccc'}} 
                style= {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress = {onPress}
            >
                <View style={[styles.innerContainer, , {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile
const styles = StyleSheet.create({
    girdItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        // đổ bóng cho ios
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})