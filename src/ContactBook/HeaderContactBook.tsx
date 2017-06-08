import * as React from 'react'
import ReactWinJS = require ('react-winjs') 
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleTogglePane } from './DuckController'

function mapStateToProps(state, props) {
  return {
    splitViewId: state.ContactBook.splitViewId,
    paneOpened: state.ContactBook.paneOpened
  }
}

function mapDispatchToProps(dispatch) {
  const actions = {
    handleTogglePane: bindActionCreators(handleTogglePane, dispatch)
  }
  return { actions }
}

class HeaderContactBook extends React.Component<any, any> {

    render () {        
        console.log('-----------------------------------')
        console.log(this.props.paneOpened)
        console.log('-----------------------------------')
        return (
            <div style={{height: 48, backgroundColor: 'rgb(1, 121, 216)'}} className="win-ui-dark">
                <ReactWinJS.SplitViewPaneToggle
                    aria-controls={this.props.splitViewId}
                    style={{ display: 'inline-block' }}
                    onInvoked={this.props.actions.handleTogglePane}
                    paneOpened={this.props.paneOpened}
                />
                <h3 className="win-h3" style={{display: 'inline-block', marginLeft: 5}}>Address Book </h3>
            </div>
        )
    }
}
export default connect <any, {}, {}>(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContactBook)
