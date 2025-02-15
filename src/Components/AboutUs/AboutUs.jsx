import React from "react";
import MediaQuery from "react-responsive";
import classes from "./AboutUs.module.css";
import OurServices from "./OurServices";
import MeetTeam from "./MeetTeam";

const AboutUs = () => {
	return (
		
			<div id={classes.aboutUs}>
				<section id={classes.whoweare}>
					<div id={classes.empowerSection}>
						<h2 id={classes.heading}>
							WE EMPOWER FEMALE ENTREPRENEURS TO THRIVE IN THE DIGITAL WORLD
							<span className={classes.circle}>◯</span>
						</h2>
					</div>

					<p id={classes.decription}>
						We understand the specific challenges and opportunities that female
						entrepreneurs face in today's digital landscape. We believe in
						harnessing the power of technology, creativity, and innovation to
						help women overcome these challenges and build businesses that align
						with their passions and aspirations.
					</p>
				</section>
				<p id={classes.whoWeAre}>
					We are an international team of passionate Designers, Developers,
					Brand Strategists & Data Analysts.
				</p>

				<MeetTeam></MeetTeam>

				<h3 id={classes.supportText}>
					Wheather you're starting out or looking to expand presence, we are
					here to provide you with the tools, strategies and support you need
					<span className={classes.circle}>◯</span>
				</h3>

				<OurServices></OurServices>
			</div>
		
	);
};

export default AboutUs;
