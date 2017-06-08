import * as React from 'react'
import ReactWinJS = require ('react-winjs')

import './ContactBook.css'

import HeaderContactBook from './HeaderContactBook'
import BodyContactBook from './BodyContactBook'

const SPLIT_VIEW_ID = 'rootSplitView'
const SPLIT_VIEW_CONFIGS = {
    small: {
        closedDisplayMode: 'none',
        openedDisplayMode: 'overlay'
    },
    medium: {
        closedDisplayMode: 'inline',
        openedDisplayMode: 'overlay'
    },
    large: {
        closedDisplayMode: 'inline',
        openedDisplayMode: 'inline'
    }
}

export default class App extends React.Component<null, object> {

    render () {
        return (
            <div style={{height: '100%'}}>
                <HeaderContactBook />
                <BodyContactBook />
            </div>
        )
    }
}