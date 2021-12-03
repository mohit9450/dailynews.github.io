import React, { Component } from 'react'
import Spinner from './ajax-loader.gif'
export class loading extends Component {
    render() {
        return (
            <div>
                <img src={Spinner} alt="loading" />
            </div>
        )
    }
}

export default loading
