/*eslint-disable*/
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import React from "react";
import bg from "assets/img/examples/bg2.jpg";
import Header from "components/Header/Header.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

const useStyles = makeStyles(styles);

export default function About(props) {
	const classes = useStyles();
	const { ...rest } = props;
	const locale = props.location?.pathname
		?.replace("/about", "")
		?.replace("/", "");
	return (
		<div
			className={classes.container}
			style={{
				margin: 0,
				maxWidth: "unset",
				padding: 0,
			}}
		>
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
			<div
				style={{
					backgroundImage: `url(${bg})`,
					objectFit: "cover",
					height: 468,
					margin: "100px auto",
					position: "relative",
					backgroundSize: "cover",
				}}
			>
				<div
					style={{
						position: "absolute",
						backgroundColor: "white",
						width: window.innerWidth <= 500 ? "unset" : "400px",
						heigt: "500px",
						top: 60,
						right: window.innerWidth <= 500 ? 0 : 115,
						padding: 30,
					}}
				>
					<div
						style={{
							fontSize: 18,
							fontWeight: "500",
							textAlign: "center",
							fontFamily: "damion,cursive",
						}}
					>
						PBI (Palestine Broadcast International)
					</div>
					<div
						style={{
							fontSize: 17,
							textAlign: "center",
							marginTop: 15,
							fontFamily: "raleway,sans-serif",
							color: "#5E5D5D",
							padding: 15,
						}}
					>
						Palestine Broadcast International is aimed to show the world the
						political, cultural, social and economic aspects of the Palestinian
						people's life and provide an opportunity for people with different
						languages to know more about Palestine's history and present,
						broadcasting in five languages (English, Spanish, French, Russian
						and Hebrew).
					</div>
				</div>
			</div>
		</div>
	);
}
