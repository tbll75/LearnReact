import React from 'react'
import {View, StyleSheet, Platform, Animated} from 'react-native'

class Test extends React.Component
{
    constructor(props) 
    {
        super(props)

        this.state= {
            topPosition: new Animated.Value(0)
        }
    }

    componentDidMount()
    {
        Animated.spring(
            this.state.topPosition,
            {
                toValue: 100,
                speed: 4,
                bounciness: 30
            }
        ).start()
    }

    render ()
    {
        return (
            <View style={styles.mainContainer}>
                <Animated.View style={[styles.subViewContainer, {top:this.state.topPosition}]}>

                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: 
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    subViewContainer:
    {
        backgroundColor: Platform.OS === 'android' ? 'blue' : 'red',
        height: 50,
        width: 50,
    }
})

export default Test