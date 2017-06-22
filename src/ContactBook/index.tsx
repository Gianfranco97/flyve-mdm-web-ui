import * as React from 'react'
import VerifyAccountActivation from '../Utils/VerifyAccountActivation'
import './ContactBook.css'

import HeaderContactBook from './HeaderContactBook'
import BodyContactBook from './BodyContactBook'

export default class ContactBook extends React.Component<any, any> {

    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        document.body.className = 'color-white'
        VerifyAccountActivation(this.props.history)
    }

    render () {
        return (
            <div style={{height: '100%'}}>
                <HeaderContactBook />
                <BodyContactBook history={this.props.history}/>
            </div>
        )

    }
}