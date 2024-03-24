/** @format */

import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { IoTelescopeSharp } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandshakeSimple } from "react-icons/fa6";
import { LiaPeopleCarrySolid } from "react-icons/lia";

import "../styles/About.scss";

const About = () => {
	return (
		<div className="aboutuswrp">
			<header className="aboutheader">
				<div className="bg">
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
					<div className="card"></div>
				</div>
				<div className="aboutheaderitems">
					<p className="about">About solneXus</p>
					<h1>Discover, engage, and network with individuals on solneXus</h1>

					<p className="about-header-text">
						At SolNexus, we are passionate about transforming the ticketing
						industry through innovation and blockchain technology. With a team
						of dedicated professionals, we embarked on a mission to address the
						inherent challenges plaguing traditional ticketing systems and pave
						the way for a more transparent, secure, and user-centric experience.
					</p>
				</div>
			</header>
			<div className="aboutcardcont">
				<div className="ourmission aboutflex">
					<div className="aboutitems">
						<h1>Our Mission</h1>
						<p>
							Our mission is to empower event organizers with the tools and
							technology they need to successfully plan, promote, and manage
							their events. We strive to create a user-friendly platform that
							offers robust features, including ticket sales, attendee
							management, analytics, and marketing tools. By prioritizing user
							experience and continuously improving our services, we aim to
							simplify the ticketing process and deliver exceptional value to
							both organizers and attendees alike.
						</p>
					</div>
					<div className="abouticon">
						<BsFillRocketTakeoffFill />
					</div>
				</div>
				<div className="ourvision aboutflex">
					<div className="abouticon">
						<IoTelescopeSharp />
					</div>
					<div className="aboutitems">
						<h1>Our Vision</h1>
						<p>
							Our vision at Solnexus is to become the leading ticketing solution
							globally, known for our innovation, reliability, and commitment to
							customer satisfaction. We envision a future where buying and
							selling tickets is effortless, transparent, and accessible to all,
							empowering event organizers to reach their audience and attendees
							to discover and attend events with ease.
						</p>
					</div>
				</div>
			</div>

			<div className="ourvaluescont">
				<div className="ourvalueitems">
					<h1 className="ourvaluehead">Our</h1>
					<h1 className="ourvaluehead">Values</h1>

					<div className="ourvaluecardcont">
						<div className="ourvaluecard">
							<div className="icon">
								<HiOutlineLightBulb />
							</div>
							<h1>Innovation</h1>
							<p>
								We believe in pushing the boundaries of what's possible. Our
								team is dedicated to fostering a culture of innovation where
								creative ideas are welcomed, and experimentation is encouraged.
								We continuously explore new technologies, methodologies, and
								approaches to enhance our platform and deliver groundbreaking
								solutions to our users
							</p>
						</div>
						<div className="ourvaluecard">
							<div className="icon">
								<FaHandshakeSimple />
							</div>
							<h1>Integrity</h1>
							<p>
								Integrity is the cornerstone of our business. We conduct
								ourselves with honesty, transparency, and ethical integrity in
								all our interactions. We hold ourselves to the highest standards
								of professionalism and accountability, ensuring that our actions
								align with our values and commitments. Trust is paramount, and
								we strive to earn and maintain the trust of our users, partners,
								and stakeholders through our integrity and reliability.
							</p>
						</div>
						<div className="ourvaluecard">
							<div className="icon">
								<LiaPeopleCarrySolid />
							</div>
							<h1>Collaboration</h1>
							<p>
								Collaboration is fundamental to our success. We believe in the
								power of teamwork, diversity, and inclusion to drive innovation
								and achieve shared goals. We foster a collaborative work
								environment where every voice is valued, and ideas are openly
								exchanged. By working together synergistically, we leverage our
								collective strengths and expertise to tackle challenges, solve
								problems, and deliver superior results.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
