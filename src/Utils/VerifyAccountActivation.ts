import axios from 'axios'
const ACTIVE = 'registered Flyve MDM users. Created by Flyve MDM - do NOT modify this comment.'

export default (history, location?) => {
    axios({
        method: 'get',
        url: 'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
    })
        .then((response) => {
            if (response.data.active_profile.comment !== ACTIVE) {
                history.push('/validateaccount')
            } else {
                if (location) {
                    history.push(`/${location}`)
                }
            }
        })
        .catch(function (error: object) {
            history.push('/login')
        })
}
