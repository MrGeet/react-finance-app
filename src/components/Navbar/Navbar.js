import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { CgMenuRight } from 'react-icons/cg';
import { IconContext } from 'react-icons/lib';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavLinks,
	NavItem,
} from './Navbar.elements';
import { useLocation, useHistory } from 'react-router-dom';

function Navbar() {
	const [click, setClick] = useState(false);
	let history = useHistory();
	let location = useLocation();

	const handleClick = () => {
		setClick(!click);
	};
	const closeMobileMenu = (to, id) => {
		console.log(location.pathname);

		if (id && location.pathname === '/') {
			scrollTo(id);
		}
		history.push(to);

		setClick(false);
	};

	const navbarData = [
		{
			to: '/',
			text: 'About',
			id: 'about',
		},
		{
			to: '/pricing',
			text: 'Pricing',
		},
		{
			to: '/signup',
			text: 'Contact',
		},
	];

	const scrollTo = (id) => {
		const element = document.getElementById(id);

		element.scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<NavIcon src="./assets/logo.png" alt="" />
							Delta
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <CgMenuRight />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							{navbarData.map((el, index) => (
								<NavItem key={index}>
									<NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
										{el.text}
									</NavLinks>
								</NavItem>
							))}
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
