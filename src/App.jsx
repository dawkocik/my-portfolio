import React from "react";

import Profile from "./components/Profile";
import Download from "./components/Download";
import Code from "./components/Code";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./styles/App.css";

function App() {
	return (
		<div className='container'>
			<div className='title-card'>
				<p className='name'>Francesco Turello</p>
				<p className='job'>&lt;Web Developer&gt;</p>
			</div>
			<div className='about-card'>
				<Profile />
				<p className='about'>About me</p>
			</div>
			<div className='cv-card'>
				<Download />
				<p className='cv'>Download CV</p>
			</div>
			<div className='projects-card'>
				<Code />
				<p className='projects'>Projects</p>
			</div>
			<div className='contact-card'>
				<Contact />
				<p className='contact'>Contact</p>
			</div>
			<div className='skills-card'>
				<Skills />
				<p className='skills'>Skills</p>
			</div>
		</div>
	);
}

export default App;
