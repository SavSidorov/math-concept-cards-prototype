import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";
import oscillator from "../assets/oscillator.jpeg"

const Styles = styled.div`
	.links {
		display: flex;
		flex-flow: column;
		height: 100%;
		align-items: center;
	}

	.links > h2 {
		width: 400px;
	}

	.links > a {
		text-decoration: none;
		color: black;

		margin-bottom: 25px;

		&:hover {
			text-decoration: underline;
		}
	}

	.links > img {
		width: 300px;
		height:auto;
		margin-bottom: 25px;
	}

	}
`;

export default function Home() {
	return (
		<Styles>
			<div className="links">
				<h2>The Driven Oscillator</h2>
				<img src={oscillator} alt="springy"/>
				<Link to="abstract">See an abstract representation.</Link>
				<Link to="example">Or, an example.</Link>
			</div>
		</Styles>
	);
}