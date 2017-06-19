import * as React from 'react'
import ReactWinJS = require ('react-winjs')
import VerifyAccountActivation from '../Utils/VerifyAccountActivation'
import './ContactBook.css'

import HeaderContactBook from './HeaderContactBook'
import BodyContactBook from './BodyContactBook'

export default class App extends React.Component<null, object> {

    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    componentWillMount = () => {
        VerifyAccountActivation(this)
    }

    render () {
        return (
            <div style={{height: '100%'}}>
                <HeaderContactBook />
                <BodyContactBook />
            </div>
        )
    }
}