import * as React from 'react'
import './Login.css'
import axios from 'axios'
import ChangeSessionToken from '../Utils/ChangeSessionToken'

export default class Login extends React.Component<any, any> {
    
    constructor (props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    ChangeInput = (input) => {
        this.setState({[input.target.name]: input.target.value})
    }
    
    SaveInServer = () => {

        axios ({
            method:'get',
            url:'https://dev.flyve.org/glpi/apirest.php/initSession',
            auth: {
                username: this.state.email,
                password: this.state.password,
            }
        })
            .then(function (response) {
                console.log(response)
                ChangeSessionToken(response.data.session_token)
                axios({
                    method:'get',
                    url:'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
                })
                    .then(function (response2) {
                        console.log(response2)
                        if (response2.data.active_profile.comment !== 'inactive registered FlyveMDM users. Created by Flyve MDM - do NOT modify this comment.') {
                            console.log(': D')
                        }
                        else console.log(':\' c')
                    })
                    .catch(function (error2) {
                        console.log(error2)
                    })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    render () {
    
        return (
            <div className="ms-grid">
                <div className="ms-row">
                    <div className="m-col-4-12 section1">
                        <img src="img/logo-flyve-login.png" className="img-login"/>
                    </div>
                    <div className="m-col-8-12 section2">
                        <h2>Mobile Device Management</h2>
                        <form>
                            <p>Email</p>
                            <input type='text' name="email" value={this.state.email} onChange={this.ChangeInput} />
                            <p>Password</p>
                            <input type='password' name="password" value={this.state.password} onChange={this.ChangeInput} />
                        </form>
                        <span className="credentials" >A solution powered by <img src="img/logo-teclib-blanc-1-2.png" /></span>
                        <button className="win-button">SIGNUP</button>
                        <button className="win-button button-form-login" onClick={this.SaveInServer}>LOGIN</button>
                    </div>
                </div>
            </div>
        )
    }
}