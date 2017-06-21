import axios from 'axios'

export default (obj) => {
    
    axios({
        method: 'get',
        url: 'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
    })
        .then((response) => {
            console.log(response)
            if (response.data.active_profile.comment !== 'registered Flyve MDM users. Created by Flyve MDM - do NOT modify this comment.') {
                obj.props.history.push(`/validateaccount`)
            }
        })
        .catch(function (error: object) {
            console.log(error)
        })
}