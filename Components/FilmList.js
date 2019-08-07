import React from "react"
import { View, Button, TextInput, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native"
import FilmItem from "./FilmItem.js"
import {connect} from  "react-redux"

class FilmList extends React.Component
{
    constructor(props)
    {
        super (props)
        this.state = { 
            films: []
        }

        //this._films = []
    }

    _displayDetailForFilm = (idFilm) => 
    {
        console.log("id: " + idFilm)
        //console.log(this.props.navigation)

        this.props.navigation.navigate("FilmDetail", {idFilm: idFilm}) 
    }

    render() 
    {
        console.log("RENDER FilmList")
        //this._loadFilms()

        return(
            <FlatList
                data={this.props.films}
                extraData={this.props.extraData}
                keyExtractor={(item) => item.id.toString()}
                onEndReachedThreshold={0.5}s
                onEndReached={() => {
                    if (this.props.isFavorites == false && this.props.page < this.prop.totalPage)
                        this.props.loadFilms()
                }}
                renderItem={({item}) => <FilmItem film={item} displayDetailForFilm={this._displayDetailForFilm} />}
            />
        ) 
    }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state)  =>  {
    return  {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(FilmList)
//export default FilmList