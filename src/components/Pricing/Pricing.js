import React from 'react';
import { Button } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingHeading,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PriceSubtitle,
	PricingCard,
} from './Pricing.elements';
import { pricingData } from '../../data/PricingData';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<PricingHeading>Pick Your Best Option</PricingHeading>
					<PriceSubtitle>
						Listen without limits on your phone, speaker, and other devices at the most
						suitable option for you.
					</PriceSubtitle>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard>
								<PricingCardInfo key={index}>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.numAcc}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
									<Button>Get Started</Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
