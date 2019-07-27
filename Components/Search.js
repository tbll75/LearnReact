import React from "react"
import { View, Button, TextInput, Text, StyleSheet, FlatList} from "react-native"
import films from "../Helpers/FilmData.js"
import FilmItem from "./FilmItem.js"
import { getFilmsFromApi } from "../API/TMDBApi.js"

class Search extends React.Component
{
    constructor(props)
    {
        super (props)
        this._films = []
    }

    _loadFilms()
    {
        getFilmsFromApi("star")
        .then(function(data)
        {
            //console.log(data)
            this._films = data.results
            console.log(this._films)
            this.forceUpdate()
        })

    }

    render() 
    {
        //console.log(films)

        this._loadFilms()

        return(
            <View style={styles.mainContainer}>
                <TextInput style={styles.textInput} placeholder="Movie Title"/>
                <Button title="Search" onPress={() => {}}/>
                <FlatList
                    data={this.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item} />}
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