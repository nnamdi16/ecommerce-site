import React, { Component } from 'react';
import styled from 'styled-components';

export default class Card extends Component {
	render() {
		return (
			<div className="card">
				<FlexCard>
					<header>New Arrival</header>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, odio voluptatum qui deserunt voluptate
						fugit pariatur cum asperiores aut nemo laborum autem explicabo laboriosam reiciendis cumque consequuntur hic
						tempora deleniti!
					</p>
				</FlexCard>
			</div>
		);
	}
}

const FlexCard = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px;
	width: 60rem;
	height: 30rem;

	&::hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
`;
