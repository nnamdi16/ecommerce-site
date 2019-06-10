import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<FlexCard>
					<header>New Arrival</header>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</FlexCard>
			</div>
		);
	}
}

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
	height: 30rem;

	:hover {
		box-shadow: 7px 7px 15px 2px rgba(0, 0, 0, 0.5);
		transition: box-shadow 0.3s ease-in;
	}
`;
