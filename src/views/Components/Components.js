// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import React from "react";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionBasicsFn from "./Sections/SectionBasicsFn.js";
import SectionBasicsSp from "./Sections/SectionBasicsSp.js";
import { getLinks } from "components/Header/HeaderLinks.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const locale =
		props.location?.pathname?.replace("/", "") !== ""
			? props.location?.pathname?.replace("/", "")
			: "en";
	return (
		<div style={{ width: "70%", margin: "0 auto" }}>
			<Header
				brand="Palestine International Broadcast"
				rightLinks={<HeaderLinks locale={locale} />}
				fixed
				color="transparent"
				changeColorOnScroll={{
					height: 400,
					color: "white",
				}}
				locale={locale}
				{...rest}
			/>
			<Parallax image={require("assets/img/bg4.jpg")}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem>
							<div className={classes.brand}>
								<h1 className={classes.title}>
									Palestine International Broadcast
								</h1>
								<h3 className={classes.subtitle}>
									A Badass Material-UI Kit based on Material Design.
								</h3>
							</div>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<div className={classNames(classes.main, classes.mainRaised)}>
				{sectionBasicsComponent(locale)}
			</div>
			<Footer />
		</div>
	);
}

const sectionBasicsComponent = (locale) => {
	switch (locale) {
		case "en":
			return <SectionBasics links={getLinks("en")} />;
		case "fn":
			return <SectionBasicsFn links={getLinks("fn")} />;
		case "es":
			return <SectionBasicsSp links={getLinks("es")} />;
		default:
			return <SectionBasics />;
	}
};
