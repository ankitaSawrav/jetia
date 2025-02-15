import classes from "./TeamMembers.module.css";

const TeamMember = () => {
	return (
		<div id={classes.teamMembers}>
			<div className={classes.member} id="member-1">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo1}`}></div>
					<div className="orange">
						<p>
							<span className={classes.memberName}>TINA</span>
							<br></br>
							<span id={classes.consultancyName}>Software Developer</span>
						</p>
					</div>
				</div>
				<div className={`${classes.memberDescOdd} `}>
					w Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.memberEven} id="member-2">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo2}`}></div>
					<div className="pink">
						<p>
							<span className={classes.memberName}>ESTHER</span>
							<br></br>
							<span id={classes.consultancyName}>UX Designer</span>
						</p>
					</div>
				</div>
				<div className={classes.memberDescEven}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.member} id="member-3">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo3}`}></div>
					<div className="armyGreen">
						<p>
							<span className={classes.memberName}>INANO KNOWLES</span>
							<br></br>
							<span id={classes.consultancyName}>Digital Consultancy</span>
						</p>
					</div>
				</div>
				<div className={classes.memberDescOdd}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
			<div className={classes.memberEven} id="member-4">
				<div className={`${classes.photoWrapper}`}>
					<div className={`${classes.photo4}`}></div>
					<div className="taupe">
						<p>
							<span className={classes.memberName}>ANKITA</span>
							<br></br>
							<span id={classes.consultancyName}>DataAnalyst</span>
						</p>
					</div>
				</div>
				<div className={classes.memberDescEven}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</div>
			</div>
		</div>
	);
};

export default TeamMember;
