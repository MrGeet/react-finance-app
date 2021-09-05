import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import SignUp from './pages/SignupPage';
import PricingPage from './pages/PricingPage';

function App() {
	return (
		<Router>
			<GlobalStyle />
			<Navbar />

			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/signup" component={SignUp} />
				<Route path="/pricing" component={PricingPage} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
