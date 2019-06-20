import React, { Component } from "react";
import io from 'socket.io-client'
import { USER_CONNECTED, LOGOUT } from '../Events'
import LoginForm from './LoginForm'
const socketUrl= "http://localhost:3000"
export default class Layout extends Component{
    constructor(props) {
        super(props);
      
        this.state = {
            socket:null,
            user:null
        };
      }
      componentWillMount() {
		this.initSocket()
    }
    setUser = (user)=>{
		const { socket } = this.state
		socket.on(USER_CONNECTED, user);
		this.setState({user})
	}


	logout = ()=>{
		const { socket } = this.state
		socket.on(LOGOUT)
		this.setState({user:null})

	}


	initSocket = ()=>{
		const socket = io(socketUrl)

		socket.on('connect', ()=>{
			console.log("Connected to");
		})
		
		this.setState({socket})
	}

  
    render(){
        const {title} = this.props
        const {socket} = this.props
        return (
            <div className = "App">
            <LoginForm socket={socket} setUser={this.setUser} />
            </div>
        );
    }

}
 