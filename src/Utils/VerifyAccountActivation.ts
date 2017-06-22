import axios from 'axios'

export default () => {
    axios({
        method: 'get',
        url: 'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
    })
        .then((response) => {
            console.log(response.data.active_profile.comment)
            if (response.data.active_profile.comment !== 'registered Flyve MDM users. Created by Flyve MDM - do NOT modify this comment.') {
                return false
            } else {
                return true
            }
        })
        .catch(function (error: object) {
            console.log(error)
            return true
        })
}
