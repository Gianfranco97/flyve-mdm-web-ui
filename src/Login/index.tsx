import * as React from 'react'
import './Login.css'
import axios from 'axios'
import ChangeSessionToken from '../Utils/ChangeSessionToken'
import { Router } from 'react-router-dom'

export default class Login extends React.Component<any, any> {
    
    static propTypes = {
        history: React.PropTypes.object.isRequired
    }

    constructor (props) {
        super(props)
        document.body.style.backgroundColor="#003533"
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
            .then((response) => {
                console.log(response)
                ChangeSessionToken(response.data.session_token)
                axios({
                    method:'get',
                    url:'https://dev.flyve.org/glpi/apirest.php/getActiveProfile/'
                })
                    .then((response2) => {
                        console.log(response2)
                        if (response2.data.active_profile.comment !== 'inactive registered FlyveMDM users. Created by Flyve MDM - do NOT modify this comment.') {
                            this.props.history.push(`/contactbook`)
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
            <div className="ms-grid" id="LoginForm">
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