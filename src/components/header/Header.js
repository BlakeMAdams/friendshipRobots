import React, { Component } from 'react';
import './Header.css';
import homeIcon from '../../img/home.png';
import searchIcon from '../../img/search.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					<header>
						<nav>
							<h1>Helo</h1>
							<Link to="/home"><img src={homeIcon} alt="Home" /></Link>
							<Link to="/search"><img src={searchIcon} alt="Search" /></Link>
						</nav>
						<div>
							<h3>{this.props.pageTitle}</h3>
						</div>
						<div>
							<Link to={process.env.REACT_APP_LOGOUT}><h4>Logout</h4></Link>
						</div>
					</header>
				</div >
			</div >
		)
	}

}