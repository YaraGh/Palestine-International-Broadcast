/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
	const classes = useStyles();
	const { locale } = props;
	const links = getLinks(locale);
	return (
		<List className={classes.list}>
			<ListItem className={classes.listItem}>
				<CustomDropdown
					noLiPadding
					buttonText="Language"
					buttonProps={{
						className: classes.navLink,
						color: "transparent",
					}}
					dropdownList={[
						<Link to="/en" className={classes.dropdownLink}>
							English
						</Link>,
						<Link to="/fn" className={classes.dropdownLink}>
							Français
						</Link>,
						<Link to="/es" className={classes.dropdownLink}>
							Español
						</Link>,
					]}
				/>
			</ListItem>
			{links.tw && (
				<ListItem className={classes.listItem}>
					<Tooltip
						id="instagram-twitter"
						title="Follow us on twitter"
						placement={window.innerWidth > 959 ? "top" : "left"}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							href={links.tw}
							target="_blank"
							color="transparent"
							className={classes.navLink}
						>
							<i className={classes.socialIcons + " fab fa-twitter"} />
						</Button>
					</Tooltip>
				</ListItem>
			)}
			{links.fb && (
				<ListItem className={classes.listItem}>
					<Tooltip
						id="instagram-facebook"
						title="Follow us on facebook"
						placement={window.innerWidth > 959 ? "top" : "left"}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							color="transparent"
							href={links.fb}
							target="_blank"
							className={classes.navLink}
						>
							<i className={classes.socialIcons + " fab fa-facebook"} />
						</Button>
					</Tooltip>
				</ListItem>
			)}
			{links.in && (
				<ListItem className={classes.listItem}>
					<Tooltip
						id="instagram-tooltip"
						title="Follow us on instagram"
						placement={window.innerWidth > 959 ? "top" : "left"}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							color="transparent"
							href={links.in}
							target="_blank"
							className={classes.navLink}
						>
							<i className={classes.socialIcons + " fab fa-instagram"} />
						</Button>
					</Tooltip>
				</ListItem>
			)}
			{links.yt && (
				<ListItem className={classes.listItem}>
					<Tooltip
						id="instagram-tooltip"
						title="Subscribe to our youtube channel"
						placement={window.innerWidth > 959 ? "top" : "left"}
						classes={{ tooltip: classes.tooltip }}
					>
						<Button
							color="transparent"
							href={links.yt}
							target="_blank"
							className={classes.navLink}
						>
							<i className={classes.socialIcons + " fab fa-youtube"} />
						</Button>
					</Tooltip>
				</ListItem>
			)}
		</List>
	);
}

export const getLinks = (locale) => {
	switch (locale) {
		case "en":
			return {
				fb: "https://www.facebook.com/PBIPS/",
				tw: "https://twitter.com/PBI_PS",
				yt:
					"https://www.youtube.com/channel/UCXMPTT39Guw4zQ__porpx5A?view_as=subscriber",
				in: "https://www.instagram.com/pbipalestine/?hl=en",
			};
		case "fn":
			return {
				fb: "https://www.facebook.com/PBIFrancais/?modal=admin_todo_tour",
				tw: "https://twitter.com/Pbi_Fr",
				yt:
					"https://www.youtube.com/playlist?list=PL3JlG8sx-dJst8q7STc080GNR_7o7owvH",
			};
		case "es":
			return {
				fb: "https://www.facebook.com/pbiEspanol/?modal=admin_todo_tour",
				tw: "https://twitter.com/pbi_es",
				yt:
					"https://www.youtube.com/playlist?list=PL3JlG8sx-dJu6WOInwwgH7FeRNO-LuN-l",
			};
		default:
			return {
				fb: "https://www.facebook.com/PBIPS/",
				tw: "https://twitter.com/PBI_PS",
				yt:
					"https://www.youtube.com/channel/UCXMPTT39Guw4zQ__porpx5A?view_as=subscriber",
				in: "https://www.instagram.com/pbipalestine/?hl=en",
			};
	}
};
