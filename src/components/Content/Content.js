import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import {
	ContentSec,
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
} from './Content.elements';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

function Content({
	primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	backgroundColor,
	inverse,
	reverse,
	bigImage,
}) {
	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
	return (
		<>
			<ContentSec inverse={inverse} ref={ref}>
				<Container>
					<ContentRow reverse={reverse}>
						<ContentColumn>
							<TextWrapper>
								<TopLine
									initial={initial}
									transition={{ delay: 0.3, duration: 0.6 }}
									animate={animation}
								>
									{topLine.text}
								</TopLine>
								<Heading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</Heading>
								<Subtitle
									initial={initial}
									transition={{ delay: 0.7, duration: 0.6 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>

								<ContentButton
									initial={initial}
									transition={{ delay: 1, duration: 0.6 }}
									animate={animation}
									inverse={inverse}
									primary={primary}
									// backgroundColor={backgroundColor}
								>
									{buttonLabel}
								</ContentButton>
							</TextWrapper>
						</ContentColumn>
						<ContentColumn
							initial={initial}
							transition={transition}
							animate={animation}
							bigImage={bigImage}
						>
							<ImgWrapper backgroundColor={backgroundColor}>
								<Img
									src={img}
									alt={alt}
									whileHover={{ rotate: 2, scale: 1.02 }}
									transition={{ duration: 0.5 }}
								/>
							</ImgWrapper>
						</ContentColumn>
					</ContentRow>
				</Container>
			</ContentSec>
		</>
	);
}

export default Content;
