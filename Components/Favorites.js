import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import FilmList from './FilmList'

class Favorites extends React.Component
{
    render () {
        //console.log(this.props.favoritesFilm)
        //console.log(this.props.navigation)

        return (
            <View>
                <FilmList
                    films={this.props.favoritesFilm}
                    navigation={this.props.navigation}
                    isFavorites={true}
                />
            </View>
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

export default connect(mapStateToProps)(Favorites)
