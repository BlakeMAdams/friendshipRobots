import React, { Component } from 'react';
import './Header.css';
import homeIcon from '../../img/home.png';
import searchIcon from '../../img/search.png';

export default class Header extends Component {

	render() {
		return (
			<div id="header">
				<div className="header-container">
					<header>
						<nav>
							<h1>Helo</h1>
							<a href="/home"><img src={homeIcon} alt="Home" /></a>
							<a href="/search"><img src={searchIcon} alt="Search" /></a>
						</nav>
						<div>
							<h3>{this.props.pageTitle}</h3>
						</div>
						<div>
							<a href="/logout"><h4>Logout</h4></a>
						</div>
					</header>
				</div >
			</div >
		)
	}

}