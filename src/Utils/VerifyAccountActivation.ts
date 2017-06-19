import axios from 'axios'

export default (obj) => {
    
    axios({
        method:'get',
        url:'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
    })
        .then((response2) => {
            console.log(response2)
            if (response2.data.active_profile.comment !== 'inactive registered FlyveMDM users. Created by Flyve MDM - do NOT modify this comment.') {
                
            }
            else obj.props.history.push(`/validateaccount`)
        })
        .catch(function (error2) {
            console.log(error2)
        })
}