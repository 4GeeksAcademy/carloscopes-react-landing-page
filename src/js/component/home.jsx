import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	return (
		<div className="mainContainer">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					<Card title="React" src="https://digital55.com/wp-content/uploads/2022/01/¿Qué-cualidades-debe-tener-un-desarrollador-especialista-en-React.png" />
					<Card title="Lifecycles components" src="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ogimage.png" />
					<Card title="Components" src="https://www.patterns.dev/img/reactjs/react-components@1.5x.svg" />
					<Card title="Hooks" src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/content/og_image_file/og_image/1154091/0120-Stale-while-revalidate_Data_Fetching_with_React_Hooks-Waldek_Social-2bf46136aefaebe37934c89c0820482b.png" />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
