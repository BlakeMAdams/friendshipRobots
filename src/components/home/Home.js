import React, { Component } from 'react';
import './Home.css';


export default class Home extends Component {

	render() {

		return (
			<div className="main-container">
				<div className="central-login">
					<div className="login-container">
						<div className="logo">
							<img src="https://raw.githubusercontent.com/DevMountain/simulation-3/master/assets/logo.png" alt="Helo"/>
						</div>
						<div className="helo">
							Helo
                            </div>
						<div className="login-button-container">
						<a href={process.env.REACT_APP_LOGIN}><button className="login-button raise">Login / Register</button></a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}