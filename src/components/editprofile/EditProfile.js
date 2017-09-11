import React, { Component } from 'react';
import './EditProfile.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';

export default class EditProfile extends Component {

	render() {

		return (
			<div id="editprofile"><Header pageTitle="Edit Profile" />
				<div className="page">
					<div className="content profileProfile flex">
						<div className="profileBox flex">
							<img className="profileImg" src="" alt="" />
							<div className="nameBox flex">
								<h2>First</h2>
								<h2>Last</h2>
							</div>
						</div>
						<div className="profileButtonBox flex">
							<Link to=""><button className="profileUpdate raise">Update</button></Link>
							<Link to=""><button className="profileCancel raise">Cancel</button></Link>
						</div>
					</div>
					<div className="profileInfo content flex">
						<div className="infoLeft flex">
							<h4>First Name</h4>
							<input className="infoInput" type="text" />
							<h4>Last Name</h4>
							<input className="infoInput" type="text" />
							<h4>Gender</h4>
							<select name="" id="">
								<option value="female">Female</option>
								<option value="male">Male</option>
							</select>
							<h4>Hair Color</h4>
							<select name="" id="">
								<option value="brown">Brown</option>
								<option value="blue">Blue</option>
								<option value="green">Green</option>
								<option value="red">Red</option>
								<option value="blonde">Blonde</option>
								<option value="white">White</option>
							</select>
							<h4>Eye Color</h4>
							<select name="" id="">
								<option value="brown">Brown</option>
								<option value="blue">Blue</option>
								<option value="green">Green</option>
							</select>
						</div>
						<div className="infoRight flex">
							<h4>Hobby</h4>
							<select name="" id="">
								<option value="videoGames">Video Games</option>
								<option value="hiking">Hiking</option>
								<option value="fishing">Fishing</option>
								<option value="rafting">Rafting</option>
							</select>
							<h4>Birth Day</h4>
							<select name="" id="">
								<option value="one">1</option>
								<option value="two">2</option>
								<option value="three">3</option>
								<option value="four">4</option>
								<option value="five">5</option>
								<option value="six">6</option>
								<option value="seven">7</option>
								<option value="eight">8</option>
								<option value="nine">9</option>
								<option value="ten">10</option>
								<option value="eleven">11</option>
								<option value="twelve">12</option>
								<option value="thirteen">13</option>
								<option value="fourteen">14</option>
								<option value="fifteen">15</option>
								<option value="sixteen">16</option>
								<option value="seventeen">17</option>
								<option value="eighteen">18</option>
								<option value="ninteen">19</option>
								<option value="twenty">20</option>
								<option value="twentyone">21</option>
								<option value="twentytwo">22</option>
								<option value="twentythree">23</option>
								<option value="twentyfour">24</option>
								<option value="twentyfive">25</option>
								<option value="twentysix">26</option>
								<option value="twentyseven">27</option>
								<option value="twentyeight">28</option>
								<option value="twentynine">29</option>
								<option value="thirty">30</option>
								<option value="thirtyone">31</option>
							</select>
							<h4>Birth Month</h4>
							<select name="" id="">
								<option value="jan">January</option>
								<option value="feb">February</option>
								<option value="mar">March</option>
								<option value="apr">April</option>
								<option value="may">May</option>
								<option value="jun">June</option>
								<option value="jul">July</option>
								<option value="aug">August</option>
								<option value="sep">September</option>
								<option value="oct">October</option>
								<option value="nov">November</option>
								<option value="dec">December</option>
							</select>
							<h4>Birth Year</h4>
							<select name="" id="year"></select>
						</div>
					</div>
				</div>
			</div>


		)
	}

}