import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<FlexCard>
					<div className="card-layout">
						<div className="card-header">
							<header>New Arrival</header>
						</div>

						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
						<div className="card-section">
							<section id="sec">
								<h2>TEST</h2>
								<ul>
									<li>
										<span class="fa fa-code" />

										<h3>Scoot</h3>
										<p>
											Music is an art form whose medium is sound and silence. Generally, a song is considered the
											smallest standalone work of music, especially when involving singing.{' '}
										</p>
										<div className="first-cart-button">
											<Button>Add to Cart</Button>
										</div>
									</li>
									<li>
										<span class="fa fa-music" />
										<h3>Cruiser</h3>
										<p>
											Music is an art form whose medium is sound and silence. Generally, a song is considered the
											smallest standalone work of music, especially when involving singing.{' '}
										</p>
										<p>
											The common elements of music are pitch (which governs melody and harmony), rhythm (and its
											associated concepts tempo, meter, and articulation), dynamics, and the sonic qualities of timbre
											and texture.
										</p>
										<div className="second-cart-button">
											<Button>Add to Cart</Button>
										</div>
									</li>
									<li>
										<span class="fa fa-users" />
										<h3>Cooper</h3>
										<p>
											Music is an art form whose medium is sound and silence. Generally, a song is considered the
											smallest standalone work of music, especially when involving singing.{' '}
										</p>
										<p>
											The common elements of music are pitch (which governs melody and harmony), rhythm (and its
											associated concepts tempo, meter, and articulation), dynamics, and the sonic qualities of timbre
											and texture. The word derives from Greek μουσική (mousike; "art of the Muses").
										</p>
										<div className="second-cart-button">
											<Button>Add to Cart</Button>
										</div>
									</li>
								</ul>
							</section>
						</div>
					</div>
				</FlexCard>
			</div>
		);
	}
}

const Button = styled.button`
  background-color: rgb(255, 70, 87);
	width:22rem;
	color: rgb(255, 255, 255);
	height: 3.5rem;
	font-family: 'Julius Sans One', sans-serif;
	font-weight:bolder;
	font-size:1rem;
	text-align:center;
	border: none;
 
}`;

const FlexCard = styled.div`
	box-sizing: border-box;
	box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.7);
	transition: 0.3s;
	border-radius: 6px;
	margin: 1em 1em;
	animation: scl 0.5s ease-in-out;
	transform-origin: left center;
	background-color: #fff;
	width: 80rem;
	height: 45rem;
	overflow-y: hidden;

	:hover {
		box-shadow: 7px 7px 15px 2px rgba(0, 0, 0, 0.2);
		transition: box-shadow 0.3s ease-in;
	}
	.first-cart-button {
		position: relative;
		top: 15rem;
	}

	.second-cart-button {
		position: relative;
		top: 3rem;
	}

	.card-layout {
		display: grid;
		grid-template-rows: minmax(1rem, 3rem) minmax(1rem, 1.95rem) minmax(20rem, rem);
		position: relative;
		top: 3.5rem;
	}

	.card-header {
		grid-row: 1/2;
		font-family: 'Poppins', sans-serif;
		font-size: 2rem;
	}
	.card-header > header {
		overflow-y: hidden;
	}

	p {
		grid-row: 2/3;
		color: rgb(98, 98, 98);
		overflow-y: hidden;
	}
	.card-section {
		grid-row: 3/4;
	}
	$font-color: #a2a2a2;
	$primary-color: #63b7e6;
	#sec {
		font-family: 'Raleway', sans-serif;
		padding: 50px 0;
		background: #fff;
		text-align: center;
		word-wrap: break-word;

		h2 {
			font-weight: 200;
			font-size: 30px;
			color: $primary-color;
		}

		ul {
			margin: 0;
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			list-style: none;
			height: 35rem;

			li {
				padding: 40px;
				width: 300px;
				height: auto;
				transition: box-shadow 0.3s;

				&:hover {
					box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
				}

				&:hover span {
					color: $primary-color;
				}
				&:hover p {
					color: #555;
				}
				&:hover h3 {
					color: $primary-color;
				}
				&:hover h3:after {
					width: 25px;
				}
				span {
					font-size: 2.6em;
					display: block;
					transition: color 0.3s;
					color: $font-color;
					&:before,
					&:after {
						position: static;
					}
				}

				h3 {
					color: darken($font-color, 20%);
					display: inline-block;
					font-size: 24px;
					font-weight: 100;
					transition: color 0.3s;
					&:after {
						content: '';
						position: relative;
						left: 50%;
						top: 20px;
						transform: translateX(-50%);
						display: block;
						width: 40px;
						height: 1px;
						background: darken($font-color, 20%);
						transition: width 0.3s;
					}
				}
				p {
					color: $font-color;
					text-align: left;
					text-indent: 1em;
					font-size: 16px;
					line-height: 26px;
					transition: color 0.3s;
				}
			}
		}
	}
`;
