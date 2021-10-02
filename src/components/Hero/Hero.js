import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const Hero = () => {
	return (
		<>
			<HeroSection id="hero">
				<HeroVideo src="./assets/hero.mp4" autoPlay loop muted />
				<Container>
					<MainHeading>Your data is secure with us</MainHeading>
					<HeroText>
						We provide the best security systems for clients all over the world
					</HeroText>

					<ButtonWrapper>
						<Link to="signup">
							<Button big>Get Started</Button>
						</Link>
						<HeroButton big>Find More</HeroButton>
					</ButtonWrapper>
				</Container>
			</HeroSection>
		</>
	);
};

export default Hero;
