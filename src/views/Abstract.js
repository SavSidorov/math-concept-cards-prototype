import React, { useState } from "react";
import styled from "styled-components";
import Latex from "react-latex"
import NavBar from "../components/NavBar"

const Styles = styled.div`
	.card {
		display: flex; 
		flex-flow: column;
		justify-content: center;

		width: 500px;
		height: 600px;

		box-shadow: 2px 2px 10px 4px #888888;

		overflow: hidden;

		box-shadow: 2px 2px 10px 2px #888888;	
	}

	.card > :nth-child(1) {
		flex: auto;
	}

	.card > :nth-child(2) {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50px;
	}

	.card > div{
		margin: 25px;
	}

	.clickable {
		color: var(--ss-primary);
		text-decoration: none;
	}
`;

export default function Abstract() {
	const latexBlank = <Latex>$Ae^&#123;-\gamma t&#125; sin(\omega \pi t)+Bcos(\omega \pi t)$</Latex>;
	const latexA = <Latex>$\textcolor&#123;ForestGreen&#125;Ae^&#123;-\gamma t&#125; sin(\omega \pi t)+Bcos(\omega \pi t)$</Latex>;
	const latexExp = <Latex>$A \textcolor&#123;ForestGreen&#125;  &#123;e^&#123;-\gamma t&#125;&#125; sin(\omega \pi t)+Bcos(\omega \pi t)$</Latex>;
	const latexSin = <Latex>$A e^&#123;-\gamma t&#125; \textcolor&#123;ForestGreen&#125;  &#123;sin(\omega \pi t)&#125;+Bcos(\omega \pi t)$</Latex>;
	const latexB = <Latex>$Ae^&#123;-\gamma t&#125; sin(\omega \pi t)+  \textcolor&#123;ForestGreen&#125;Bcos(\omega \pi t)$</Latex>;
	const latexCos = <Latex>$A e^&#123;-\gamma t&#125; sin(\omega \pi t)+B   \textcolor&#123;ForestGreen&#125;  &#123;cos(\omega \pi t)&#125;$</Latex>;

	const [latex, setLatex] = useState(latexBlank);

	/* eslint-disable */
	return (
		<Styles>
				<div className="card">
					<NavBar />
					{latex}
          <div>
						<span>A driven oscillator has two components - a transient part (the behavior when no force is applied) and a steady-state part (an applied force).</span> 
						<span>The transient is composed of a </span> 
						<a href="#" onClick={() => setLatex(latexA)} className="clickable">magnitude, </a>
						<a href="#" onClick={() => setLatex(latexExp)} className="clickable">a decaying exponential </a> 
						<span>that makes the function go to zero, and an </span>
						<a href="#" onClick={() => setLatex(latexSin)} className="clickable">oscillating wave. </a>
						<span>The steady-state is </span>
						<a href="#" onClick={() => setLatex(latexB)} className="clickable">a magnitude </a> 
						<span>paired with </span>
						<a href="#" onClick={() => setLatex(latexCos)} className="clickable">an oscillator </a>
						<span>that never decays.</span>
					</div>
				</div>
		</Styles>
	);
	/* eslint-enable */
}