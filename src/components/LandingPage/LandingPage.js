import React, { Component } from 'react';
import styled from 'styled-components';
import './landing-page.css';
import '../../components/reset.css';
import ecommerceLogo from '../img/ecommerce-logo.png';
import banner from '../img/banner.png';
import search from '../img/search.png';
import cart from '../img/shopping-cart.svg';
import cart_value from '../img/cart_value.png';
import profile from '../img/user.svg';
import Card from './card/Card';

export default class LandingPage extends Component {
	render() {
		return (
			<div>
				<div className="ecommerce-layout">
					<div className="header-layout">
						<div className="menu-header ">
							<div className="menu-list">
								<div className="menu-list-top">
									<div className="menu-list-logo">
										<img className="ecommerce-logo" src={ecommerceLogo} alt="ecommerceLogo" />
									</div>

									<div className="menu-list-top-item">
										<ul>
											<li>Shop</li>
											<li>Men</li>
											<li>Women</li>
											<li>Kids</li>
											<li>Sale</li>
										</ul>
									</div>
									<div className="menu-input">
										<input type="text" />
										<img src={search} alt="Search Icon" className="search-btn" />
									</div>
									<div className="menu-shopping">
										<img src={profile} alt="Profile" className="menu-profile" />
										<img src={cart} alt="Cart" className="menu-cart" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="menu-layout">
						<div className="menu-list-bottom">
							<ul>
								<li>Makeup</li>
								<li>Skin</li>
								<li>Hair</li>
								<li>Appliances</li>
								<li>Personal care</li>
								<li>Herbal</li>
								<li>Mom & Baby</li>
								<li>Wellness</li>
								<li>Men's Fragrance</li>
								<li>Pop Ups</li>
							</ul>
						</div>
					</div>
					<div className="banner-layout">
						<div className="banner">
							<img src={banner} alt="Banner" />
						</div>

						{/* <FlexCard />
					<div className='products-card'></div> */}
					</div>
					<div className="advert-layout">
						<div className="ecommerce-discount">
							<div className="ecommerce-discount-side">
								<div className="summer-discount">
									<p>20% off</p>
								</div>
							</div>
							<div className="summer-collection">
								<p>Summer Collection</p>
							</div>
							<div className="summer-date">
								<p>only on june 18</p>
							</div>
							<div className="summer-button">
								<button class="btn-overlay">Read More</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// const FlexCard = styled(Card)`
// 	position: absolute;
// 	top: -30rem;
// `;
