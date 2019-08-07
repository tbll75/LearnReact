import Rect from 'react'
import {View, Animated, Dimensions} from 'react-native'

class FadeIn extends React.Component
{
    constructor(props)
    {
        super (props)

        this.state = 
        {
            positionLeft: new  Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount()
    {
        Animated.spring(
            this.state.positionLeft,
            {
                Value: 0
            }
        )
    }

    render()
    {
        return (
            <Animated.View style={{left: this.state.positionLeft}}>

            </Animated.View>
        )
    }
}

export default FadeIn