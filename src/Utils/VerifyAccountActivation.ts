import axios from 'axios'

export default () => {
    let lala =  false
    axios({
        method: 'get',
        url: 'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
    })
        .then((response) => {
            
            if (response.data.active_profile.comment !== 'registered Flyve MDM users. Created by Flyve MDM - do NOT modify this comment.') {
                lala = true
            }
        })
        .catch(function (error: object) {
            console.log(error)
        })
    return lala
}