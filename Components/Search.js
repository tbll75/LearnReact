import React from "react"
import { View, Button, TextInput, Text, StyleSheet, FlatList} from "react-native"
import Films from "../Helpers/FilmData.js"
import FilmItem from "./FilmItem.js"

class Search extends React.Component
{
    render() 
    {
        return(
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} placeholder="Movie Title"/>
                <Button title="Search" onPress={() => {}}/>
                <FlatList
                    data={Films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem/>}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        marginTop:20,
    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});

export default Search