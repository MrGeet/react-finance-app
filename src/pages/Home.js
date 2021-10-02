import React from 'react';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import Hero from '../components/Hero/Hero';
import Content from '../components/Content/Content';
import Features from '../components/Features/Features';
import Carousel from '../components/Carousel/Carousel';

function Home() {
	return (
		<>
			<Hero></Hero>
			<Features id="about" />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
		</>
	);
}

export default Home;
