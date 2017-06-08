const INITIAL_STATE = {
    splitViewId: 'rootSplitView',
    paneOpened: false
}

// Constants
const HANDLE_TOGGLE_PANE = 'flyve-mdm-web-ui/ContactBook/handleTogglePane'
const CLOSE_PANE = 'flyve-mdm-web-ui/ContactBook/closePane'

// Reducers
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {

        case HANDLE_TOGGLE_PANE:
            return {
               ...state,
               paneOpened: !state.paneOpened
            }

        case CLOSE_PANE:
            return {
               ...state,
               paneOpened: false
            }

        default: return state
    }
}

// Action Creators
export function handleTogglePane () {
  return { 
      type: HANDLE_TOGGLE_PANE
    }
}
export function closePane () {
  return { 
      type: CLOSE_PANE
    }
}
