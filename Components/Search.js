import React from "react"
import { View, Button, TextInput, Text, StyleSheet, FlatList, ActivityIndicator} from "react-native"
import films from "../Helpers/FilmData.js"
import FilmItem from "./FilmItem.js"
import { getFilmsFromApi } from "../API/TMDBApi.js"
import {connect} from  "react-redux"
import FilmList from "./FilmList.js"

class Search extends React.Component
{
    constructor(props)
    {
        super (props)
        this.state = { 
            films: [],
            isLoading: false }

        this.page = 0
        this.totalPage = 0
        this.filmToSearch = ""

        this._loadFilms = this._loadFilms.bind(this)
    }

    _loadFilms()
    {
        if (this.filmToSearch.length > 0) 
        {
            this.setState({isLoading: true})
            //console.log("_loadFilms")

            getFilmsFromApi(this.filmToSearch, this.page+1).then((data) => 
            { 
                //console.log(data.results)
                this.page = data.page
                this.totalPage = data.total_pages
                this.setState({
                    films: this.state.films.concat(data.results),
                    isLoading: false
                })
            }) 
        }
    }

    _displayLoader()
    {
        if (this.state.isLoading)
        {
            return (
                <View style={styles.loadingContainer} >
                    <Text text="Loader"/>
                    <ActivityIndicator size="large" /> 
                </View>
            )
        }
    }

    _searchFilms()
    {
        this.page = 0
        this.totalPage = 0
        this.setState({films: []}, () => this._loadFilms())
    }

    render() 
    {
        console.log("RENDER " + this.state.isLoading)
        //this._loadFilms()

        return(
            <View style={styles.mainContainer}>

                <TextInput style={styles.textInput} 
                    onSubmitEditing={() => this._searchFilms()}
                    placeholder="Movie Title" 
                    onChangeText={(text) => this.filmToSearch = text}
                    /> 

                <Button title="Search" style={styles.buttonSearch} onPress={() => {this._searchFilms()}}/>

                <FilmList
                    films={this.state.films}
                    extraData={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    page={this.page}
                    totalPage={this.totalPage}
                    loadFilms={this._loadFilms}
                    isFavorites={false}
                />

                {this._displayLoader()}

            </View>
        ) 
    }
}

const styles = StyleSheet.create({

    mainContainer:{
        flex:1,
        //marginTop:20,
    },
    textInput: {
        margin: 5,
        //marginRight: 5,
        height: 50,
        //borderColor: '#000000',
        //borderWidth: 1,
        paddingLeft: 5
    },
    loadingContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSearch:{
        
    }
});

const mapStateToProps = (state)  =>  {
    return  {
        favoritesFilm: state.favoritesFilm
    }
}

export default connect(mapStateToProps)(Search)
//export default Search