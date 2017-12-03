import React, { Component } from 'react'
import Hello from './components/hello'
import BasicExample from './components/basicExample'

class Root extends Component {
render(){
    return (
        <div>
            <Hello />
            <BasicExample />
        </div>
    )
}
}
export default Root