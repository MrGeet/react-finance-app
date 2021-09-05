import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FeatureSection = styled.div`
	padding: 140px;
	position: relative;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		padding: 50px 10px;
		margin-top: 10rem;
	}
`;

export const FeatureTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
`;

export const FeatureTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	/* flex-wrap: wrap; */
	margin-top: 4rem;
	grid-gap: 2rem;

	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
		/* grid-gap: 3rem; */
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled(motion.div)`
	/* max-width: 33%; */
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;

	@media screen and (max-width: 960px) {
		/* max-width: 50%; */
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	/* &.one {
		background: linear-gradient(130deg, #9cb3ff 0%, #b0ffe9 100%);
	}
	&.two {
		background: linear-gradient(220deg, #e7d1ff 0%, #8383ef 100%);
	}
	&.three {
		background: linear-gradient(130deg, #ff8989 0%, #ffddc5 100%);
	}
	&.four {
		background: linear-gradient(130deg, #ffa8e8 0%, #ffe6e6 100%);
	}
	&.five {
		background: linear-gradient(130deg, #ffaf73 0%, #fffecc 100%);
	}
	&.six {
		background: linear-gradient(130deg, #59dbb0 0%, #feffb5 100%);
	} */

	padding: 30px;
`;
export const FeatureName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
