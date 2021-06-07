import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

const Styles = styled.div`
.buttons {
	margin-top: 25px;
	margin-bottom: 25px;
	margin-left: 145px;
}

.buttons > * {
	text-decoration: none;
	color: white;
	background-color: var(--ss-primary);
	font-size: 24px;
	font-weight: 500;

	border-style: solid;
	border-radius: 10px;
	margin-right: 20px;
	padding: 10px;

	&:hover {
		color: var(--ss-primary);
		background-color: white;
	}
}
`;

export default function NavBar(){
	return(
	<Styles>
		<div className="buttons">
			<Link to="/abstract">ABSTRACT</Link>
			<Link to="/example">EXAMPLE</Link>
		</div>
	</Styles>
	);
}
