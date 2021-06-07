import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LineChart from "../components/LineChart";
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

  .card > * {
    margin-left: auto;
    margin-right: auto;
  }

  .anchors {
    display:flex;
    
    margin-top: 25px;
    margin-bottom: -5px;
  }

  .anchors > * {
    color: white;
    background-color: var(--ss-primary);
  
    border-style: solid;
    border-radius: 10px;
    margin-top: -20px;
    height:5px;
  
    &:hover {
      background-color: white;
    }
  }

  .e-anchor{
    width:50px;
    margin-left: 75px;
    margin-right: 0px;
  }

  .sin-anchor{
    width:100px;
  }

  .cos-anchor{
    width:100px;
    margin-left: 35px;
    margin-right: 85px;
  }

  .paragraph{
		margin: 25px;
	}
`;

export default function Example() {
  let expBlack = <Latex>$\textcolor&#123;Black&#125;&#123;e^&#123;-3t&#125;&#125;$</Latex>;
  let sinBlack = <Latex>$\textcolor&#123;Black&#125;&#123;sin(2\pi t)&#125;$</Latex>;
  let cosBlack = <Latex>$\textcolor&#123;Black&#125;&#123;+cos(2\pi t)&#125;$</Latex>;
  let expGray = <Latex>$\textcolor&#123;Gray&#125;&#123;e^&#123;-3t&#125;&#125;$</Latex>;
  let sinGray = <Latex>$\textcolor&#123;Gray&#125;&#123;sin(2\pi t)&#125;$</Latex>;
  let cosGray = <Latex>$\textcolor&#123;Gray&#125;&#123;+cos(2\pi t)&#125;$</Latex>;

  const [exp, setExp] = useState(expBlack);
  const [sin, setSin] = useState(sinBlack);
  const [cos, setCos] = useState(cosBlack);
  const [expSelected, setExpSelected] = useState(false);
  const [sinSelected, setSinSelected] = useState(false);
  const [cosSelected, setCosSelected] = useState(false);

  let descretizedESinCos = [], descretizedESin = [], descretizedECos = [], descretizedE = []; 
  let descretizedSinCos = [], descretizedSin = [], descretizedCos = [], descretizedNull = [];
  
  const [data, setData] = useState(descretizedESinCos);

  //Mapping values of all possible functions to create discrete points, and putting them in arrays
  for(let i= 0; i <= 1000; i++){
    let t = i/100; //Creates a domain xE[0,10]

    let eSinCos = Math.pow(Math.E, (-3*t))*Math.sin(2*Math.PI*t)+Math.cos(2*Math.PI*t);
    let eSin = Math.pow(Math.E, (-3*t))*Math.sin(2*Math.PI*t);
    let eCos = Math.pow(Math.E, (-3*t))+Math.cos(2*Math.PI*t);
    let SinCos = Math.sin(2*Math.PI*t)+Math.cos(2*Math.PI*t);
    let eFunction = Math.pow(Math.E, (-3*t));
    let cosFunction = Math.cos(2*Math.PI*t);
    let sinFunction = Math.sin(2*Math.PI*t);
    let nullFunction = 0;

    descretizedESinCos.push({
      x: t,
      y: eSinCos < 0 ? 0 : eSinCos //Set a lower bound of 0
    })

    descretizedESin.push({
      x: t,
      y: eSin < 0 ? 0 : eSin //Set a lower bound of 0
    })

    descretizedECos.push({
      x: t,
      y: eCos < 0 ? 0 : eCos //Set a lower bound of 0
    })

    descretizedSinCos.push({
      x: t,
      y: SinCos < 0 ? 0 : SinCos //Set a lower bound of 0
    })

    descretizedE.push({
      x: t,
      y: eFunction < 0 ? 0 : eFunction //Set a lower bound of 0
    })

    descretizedCos.push({
      x: t,
      y: cosFunction < 0 ? 0 : cosFunction //Set a lower bound of 0
    })

    descretizedSin.push({
      x: t,
      y: sinFunction < 0 ? 0 : sinFunction //Set a lower bound of 0
    })

    descretizedNull.push({
      x: t,
      y: nullFunction < 0 ? 0 : nullFunction //Set a lower bound of 0
    })
  }

  //Functions for the equation buttons - for e, sin & cos respectively.
  function eClick(e){
    e.preventDefault();

    if(exp.props.children === expBlack.props.children){
      setExp(expGray)
      setExpSelected(true)
    } 

    if(exp.props.children === expGray.props.children){
      setExp(expBlack)
      setExpSelected(false)
    }
  }

  function sinClick(e){
    e.preventDefault(); 

    if(sin.props.children === sinBlack.props.children){
      setSin(sinGray)
      setSinSelected(true)
    } 

    if(sin.props.children === sinGray.props.children){
      setSin(sinBlack)
      setSinSelected(false)
    }
  }
  
  function cosClick(e){
    e.preventDefault(); 

    if(cos.props.children === cosBlack.props.children){
      setCos(cosGray)
      setCosSelected(true)
    } 

    if(cos.props.children === cosGray.props.children){
      setCos(cosBlack)
      setCosSelected(false)
    }
  }

  //Function to update the plot based on which LaTeX elements are selected.
  function updatePlot(){
    if(!expSelected && !sinSelected && !cosSelected){
      setData(descretizedESinCos)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(expSelected && !sinSelected && !cosSelected){
      setData(descretizedSinCos)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(expSelected && sinSelected && !cosSelected){
      setData(descretizedCos)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(expSelected && !sinSelected && cosSelected){
      setData(descretizedSin)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(expSelected && sinSelected && cosSelected){
      setData(descretizedNull)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(!expSelected && !sinSelected && cosSelected){
      setData(descretizedESin)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(!expSelected && sinSelected && !cosSelected){
      setData(descretizedECos)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
    if(!expSelected && sinSelected && cosSelected){
      setData(descretizedE)
      console.log(expSelected + " " + sinSelected + " " + cosSelected)
    }
  }

  /* eslint-disable */
  useEffect(() => {
		updatePlot();
	}, [expSelected, sinSelected, cosSelected]);

  
	return (
		<Styles>
				<div className="card">
          <NavBar />
          <LineChart 
            width={500}
            height={300}
            data={data}
            horizontalGuides={5}
            precision={2}
            verticalGuides={1}
          />
          <div>
            <span><a href="#" onClick={eClick}>{exp}</a></span>
            <span><a href="#" onClick={sinClick}>{sin}</a></span>
            <span><a href="#" onClick={cosClick}>{cos}</a></span>
          </div>
          <div className="paragraph">
            <span>Here's the driven oscillator equation with actual values. </span>
            {!expSelected || !sinSelected ? <Latex>$A = 1$. </Latex> : null} 
            {expSelected ? null : <Latex>$\gamma = 3$. </Latex>}
            {sinSelected && cosSelected ? null : <Latex>$\omega = 2\pi$ for both sinusoid waves. </Latex>}
            {cosSelected ? null : <Latex>$B = 1$. </Latex>}
            <b>Try and cancel out some terms!</b>
          </div>
				</div>
		</Styles>
	);
  /* eslint-enable */
}