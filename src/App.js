import React, { Component } from 'react'
import ReactWinJS from 'react-winjs'

const SPLIT_VIEW_ID = "rootSplitView"
const SPLIT_VIEW_CONFIGS = {
    small: {
        closedDisplayMode: "none",
        openedDisplayMode: "overlay"
    },
    medium: {
        closedDisplayMode: "inline",
        openedDisplayMode: "overlay"
    },
    large: {
        closedDisplayMode: "inline",
        openedDisplayMode: "inline"
    }
}

export default class App extends Component {

    render () {
        return (
            <div style={{height: "100%"}}>
                <div style={{height: 48, backgroundColor: "rgb(1, 121, 216)"}} className="win-ui-dark">
                    <ReactWinJS.SplitViewPaneToggle
                        aria-controls={SPLIT_VIEW_ID}
                        style={{display:'inline-block'}}/>
                    <h3 className="win-h3" style={{display: "inline-block", marginLeft: 5}}>Address Book</h3>
                </div>
            </div>
        )
    }
}