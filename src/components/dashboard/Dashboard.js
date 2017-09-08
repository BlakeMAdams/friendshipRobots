import React, { Component } from 'react';
import './Dashboard.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {

	render() {

		return (
			<div id="dashboard"><Header pageTitle="Dashboard" />
				<section className="page">
					<div className="top-bar flex">

						<div className='profile-box content flex col-30'>
							<div>
								<img src="" alt="profile" className="profile-img" />
							</div>
							<div>
								<h2>{/* bring in values from reducer */}Fname</h2>
								<h2>{/* bring in values from reducer */}Lname</h2>
								<Link to="/editprofile"><button className="grey-button raise">Edit Profile</button></Link>
							</div>
						</div>
						<div className="content col-60">
							<span>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</span>
						</div>

					</div>
					<div className="recommended-container content">
						<div className="rec-title flex">
							<h3>Recommended Friends</h3>
							<div>Sorted by <select class="Dashboard__recommended_select open-sans"><option value="first"> First Name </option><option value="last"> Last Name </option><option value="gender"> Gender </option><option value="hobby"> Hobby </option><option value="hair_color"> Hair Color </option><option value="eye_color"> Eye Color </option><option value="birthday"> Birthday </option></select>
							</div>
						</div>
					</div>
				</section>
			</div>

		)
	}

}