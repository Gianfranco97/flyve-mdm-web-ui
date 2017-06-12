import GetMode from '../Utils/GetMode'

const INITIAL_STATE = {
    splitViewId: 'rootSplitView',
    paneOpened: false,
    mode: GetMode(),
    location: ['people']
}

// Constants
const HANDLE_TOGGLE_PANE = 'flyve-mdm-web-ui/ContactBook/handleTogglePane'
const CLOSE_PANE = 'flyve-mdm-web-ui/ContactBook/closePane'
const CHANGE_MODE = 'flyve-mdm-web-ui/ContactBook/changeMode'
const CHANGE_LOCATION = 'flyve-mdm-web-ui/ContactBook/changeLocation'

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
        
        case CHANGE_MODE:
            return {
               ...state,
               mode: action.nexMode
            }
        
        case CHANGE_LOCATION:
            return {
               ...state,
               location: action.newLocation
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
export function changeMode (nexMode) {
  return { 
      type: CHANGE_MODE,
      nexMode
    }
}
export function changeLocation (newLocation) {
  return { 
      type: CHANGE_LOCATION,
      newLocation
    }
}
