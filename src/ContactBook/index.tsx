import * as React from 'react'
import ReactWinJS = require ('react-winjs')
import VerifyAccountActivation from '../Utils/VerifyAccountActivation'
import './ContactBook.css'

import HeaderContactBook from './HeaderContactBook'
import BodyContactBook from './BodyContactBook'
import ValidateAccount from '../Login/ValidateAccount'

export default class App extends React.Component<any, any> {

    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        document.body.className = 'color-white'
    }

    render () {
        if (VerifyAccountActivation()) {
           return (
                <div style={{height: '100%'}}>
                    <HeaderContactBook />
                    <BodyContactBook />
                </div>
            ) 
        } else {
            return <ValidateAccount history={this.props.history}/> 
        }
    }
}