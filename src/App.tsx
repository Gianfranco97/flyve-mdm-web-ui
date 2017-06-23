import * as React from 'react'
import Loading from './GenericComponents/Loading'
import VerifyAccountActivation from './Utils/VerifyAccountActivation'

export default class App extends React.Component<any, any> {

    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        document.body.className = 'color-white'
        console.log(this.props.history)
        VerifyAccountActivation(this.props.history, 'contactbook')
    }

    render () {
        return <Loading />
    }
}
