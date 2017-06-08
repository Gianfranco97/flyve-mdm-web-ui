import * as React from 'react'
import ReactWinJS = require ('react-winjs') 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { closePane } from './DuckController'
import Data from './FakeData'

function mapStateToProps(state, props) {
  return {
    splitViewId: state.ContactBook.splitViewId,
    paneOpened: state.ContactBook.paneOpened
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    closePane: bindActionCreators(closePane, dispatch)
  }
  return { actions }
}

class BodyContactBook extends React.Component<any, any> {
    
    constructor(props) {
        super(props)
        this.state = {
            content: 'People'
        }

    }

    handleChangeContent (newContent) {
        this.setState({
            content: newContent
        }, () => {
            this.props.actions.closePane()
        })
    }

    render () {   
        
        let contentComponent =  <h2 className="win-h2" style={{marginLeft: "10px"}}> {this.state.content} </h2>

        let pane = (
            <div>
                <ReactWinJS.SplitView.Command
                    label="People"
                    icon="contact"
                    onInvoked={ () => this.handleChangeContent("People")} 
                />
                <ReactWinJS.SplitView.Command
                    label="What's New"
                    icon="comment"
                    onInvoked={ () => this.handleChangeContent("What's New")} 
                />
                <ReactWinJS.SplitView.Command
                    label="Groups"
                    icon="people"
                    onInvoked={ () => this.handleChangeContent("Groups")} 
                />

                <ReactWinJS.SplitView.Command
                    label="Settings"
                    icon="settings"
                    onInvoked={ () => this.handleChangeContent("Settings")}
                />
            </div>
        )

        return (
            <ReactWinJS.SplitView
                id={this.props.splitViewId}
                paneComponent={pane}
                contentComponent={contentComponent}
                paneOpened={this.props.paneOpened}
                onAfterClose={this.props.actions.handleAfterClose}
            />
        )
    }
}
export default connect <any, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(BodyContactBook)