import axios from 'axios'

export default (session_token: string) => {
    axios.defaults.headers.common['Session-Token'] = session_token
}
