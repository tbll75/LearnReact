import React from 'react'
import {Animated} from 'react-native'

class EnlargeShrink extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = 
        {
            size: new Animated.Value(this._getSize())
        }
    }

    _getSize()
    {
        console.log(this.props.shouldEnlarge)
        
        if (this.props.shouldEnlarge) {
            return 60
        }

        return 40
    }

    componentDidUpdate()
    {
        Animated.spring(
            this.state.size,
            {
                toValue: this._getSize()
            }
        ).start()
    }

    render ()
    {
        return (
            <Animated.View style={{
                height: this.state.size,
                width: this.state.size
            }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default EnlargeShrink