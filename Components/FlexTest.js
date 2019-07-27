import React from "react"
import {View,StyleSheet} from "react-native"


class FlexTest extends React.Component
{
    render() {
        return (
            <View style={styles.mainContainer}>
                
                <View style={{ height:50, width:50, backgroundColor: 'grey' }}></View>
                <View style={{ height:50, width:50, backgroundColor: 'red' }}></View>
                <View style={{ height:50, width:50, backgroundColor: 'green' }}></View>
                
                {/*<View style={{ flex: 1, backgroundColor: 'red' }}></View>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //flexDirection:'row',
        backgroundColor:'yellow'
    },
    textInput: {
        flex:1,
        backgroundColor:'grey'
    }
});


export default FlexTest