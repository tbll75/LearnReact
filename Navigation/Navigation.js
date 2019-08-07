import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search.js'
import FilmDetail from '../Components/FilmDetail.js'
import Favorites from '../Components/Favorites.js'
import FilmList from '../Components/FilmList'
import Test from '../Components/Test'
import React from 'react'
import {Image, StyleSheet} from 'react-native'

const SearchStackNavigator = createStackNavigator(
    {
        Search: {
            screen: Search,
            navigationOptions:
            {
                title: "Rechercher"
            }
        },/*
        FilmList: {
            screen: FilmList,
            navigationOptions:
            {
                title: "FilmList"
            }
        },*/
        FilmDetail: {
            screen: FilmDetail
        }
    }
)

const FavoritesStackNavigator = createStackNavigator(
    {
        Favorites: {
            screen: Favorites,
            navigationOptions:
            {
                title: "Favorites"
            }
        },
        FilmDetail: {
            screen: FilmDetail
        }
    }
)

const MoviesTabNavigator = createBottomTabNavigator(
    {
        Test:{
            screen: Test,
        },
        Search: {
            screen: SearchStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image 
                        source={require("../Images/search.png")}
                        style={styles.icon}/>
                }
            }
        },
        Favorites: {
            screen: FavoritesStackNavigator,
            navigationOptions: {
                tabBarIcon: () => {
                    return <Image 
                        source={require("../Images/fav_activated.png")}
                        style={styles.icon}/>
                }
            }
        },

    },
    {
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            activeBackgroundColor: '#DDDDDD',
            inactiveBackgroundColor: '#FFFFFF'

        }
    }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})

export default createAppContainer(MoviesTabNavigator)