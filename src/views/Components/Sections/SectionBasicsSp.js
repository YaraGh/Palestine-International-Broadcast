import { Card } from "@material-ui/core";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import Button from "components/CustomButtons/Button.js";
import React from "react";
import ReactPlayer from "react-player";

const useStyles = makeStyles(styles);

export default function SectionBasicsSp(props) {
	const classes = useStyles();
	const { links } = props;
	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Card>
					<div
						class="fb-page fb_iframe_widget"
						data-href="http://www.facebook.com/pbiEspanol"
						data-height="575"
						data-width="280"
						data-hide-cover="false"
						data-show-posts="true"
						data-show-facepile="false"
						data-adapt-container-width="true"
						fb-xfbml-state="rendered"
						fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=304553036307597&amp;container_width=280&amp;height=575&amp;hide_cover=false&amp;href=http%3A%2F%2Fwww.facebook.com%2FpbiEspanol&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=true&amp;width=280"
					>
						<span style={{ verticalAlign: "bottom", width: 285, height: 576 }}>
							<iframe
								name="f3d76a5c4faa258"
								width="280px"
								height="575px"
								data-testid="fb:page Facebook Social Plugin"
								title="fb:page Facebook Social Plugin"
								frameborder="0"
								allowtransparency="true"
								allowfullscreen="true"
								scrolling="no"
								allow="encrypted-media"
								src="https://www.facebook.com/v2.4/plugins/page.php?adapt_container_width=true&amp;app_id=304553036307597&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df24d2a89c7e576%26domain%3Deditor.wix.com%26origin%3Dhttps%253A%252F%252Feditor.wix.com%252Ff9b878bac932fc%26relation%3Dparent.parent&amp;container_width=280&amp;height=575&amp;hide_cover=false&amp;href=http%3A%2F%2Fwww.facebook.com%2FpbiEspanol&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=true&amp;width=280"
								style={{
									border: "none",
									// visibility: "visible",
									width: 285,
									height: 576,
								}}
								class=""
							></iframe>
						</span>
					</div>
				</Card>
				<Card>
					<wix-iframe
						data-src="https://static.filesusr.com/html/6be8f4_c6bf623cafd1c2412977df8df7f28386.html"
						data-state="hasContent"
						id="comp-kb9p4u5o"
						class="htco1"
						style={{
							height: "100%",
						}}
					>
						<div
							id="comp-kb9p4u5oiFrameHolder"
							class="htco1iFrameHolder"
							style={{
								height: "100%",
							}}
						>
							<iframe
								width="100%"
								height="100%"
								name="htmlComp-iframe"
								scrolling="auto"
								style={{
									height: "100%",
								}}
								sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-pointer-lock"
								src="https://static.filesusr.com/html/6be8f4_c6bf623cafd1c2412977df8df7f28386.html"
							></iframe>
						</div>
					</wix-iframe>
				</Card>
				<Card style={{ width: "30%" }}>
					<video
						className="VideoTag"
						autoPlay
						loop
						muted
						style={{ width: "100%" }}
					>
						<source
							src={require("assets/img/examples/1001ES.mp4")}
							type="video/mp4"
						/>
					</video>
				</Card>
			</div>
			<div style={{ justifyContent: "center", display: "flex", margin: 10 }}>
				<ReactPlayer url="https://www.youtube.com/watch?list=PL3JlG8sx-dJu6WOInwwgH7FeRNO-LuN-l&v=cvmMQBe7BG8" />
			</div>
			<iframe
				scrolling="no"
				frameborder="0"
				allow="autoplay; camera; microphone; geolocation; vr"
				allowtransparency="true"
				allowfullscreen=""
				name="comp-kb9kq2qf"
				title="SoundCloud"
				aria-label="SoundCloud"
				id="comp-kb9kq2qfiframe"
				class="style-kb9kqosfiframe"
				style={{
					width: 560,
					height: 283,
					minHeight: 283,
					minWidth: 560,
					display: "block",
					position: "absolute",
				}}
				src="https://www.wix.com/soundcloud-tpa/widget.html?cacheKiller=1592673453547&amp;commonConfig=%7B%22brand%22%3A%22wix%22%7D&amp;compId=comp-kb9kq2qf&amp;currency=USD&amp;deviceType=desktop&amp;height=283&amp;instance=TgLmnYm44TFzicRFhtODaawjoC8ZhsRUvC-HRxmVnuo.eyJpbnN0YW5jZUlkIjoiODRjMzkxMzQtYWU2YS00OWRhLWJlMDgtMTdlZTYzNmZkY2VlIiwiYXBwRGVmSWQiOiIxNGE4NWIxMy1kN2RhLWVlOGUtNzI5MC0zYjkzMzQwZjYzZmEiLCJtZXRhU2l0ZUlkIjoiYmZmOTZkNTctNjVjMy00ZmQyLWI2NzctZThmMjU1ZWJiYWQxIiwic2lnbkRhdGUiOiIyMDIwLTA2LTIwVDE3OjE3OjMyLjI5OVoiLCJ1aWQiOiIzNmY5ZGJkYy1lYWI5LTRiMDItOTQ4YS04ZmI5NjU4YzEyOGUiLCJwZXJtaXNzaW9ucyI6Ik9XTkVSIiwiZGVtb01vZGUiOmZhbHNlLCJvcmlnaW5JbnN0YW5jZUlkIjoiNTg1NjljZWUtOTJjNC00MzU3LWFjYzAtOTk1NzI3M2FjNDM4IiwiYmlUb2tlbiI6IjNiM2FmYzYzLWNiYTktMDYwOC0wODdmLWZmMWMzNjg0NjYzZiIsInNpdGVPd25lcklkIjoiMzZmOWRiZGMtZWFiOS00YjAyLTk0OGEtOGZiOTY1OGMxMjhlIiwic2l0ZU1lbWJlcklkIjoiMzZmOWRiZGMtZWFiOS00YjAyLTk0OGEtOGZiOTY1OGMxMjhlIiwiZXhwaXJhdGlvbkRhdGUiOiIyMDIwLTA2LTIwVDIxOjE3OjMyLjI5OVoiLCJsb2dpbkFjY291bnRJZCI6IjM2ZjlkYmRjLWVhYjktNGIwMi05NDhhLThmYjk2NThjMTI4ZSJ9&amp;locale=en&amp;pageId=c1dmp&amp;siteRevision=2&amp;tz=America%2FNew_York&amp;viewMode=preview&amp;viewerCompId=comp-kb9kq2qf&amp;width=560"
			></iframe>
			<div
				className={classes.textCenter + " " + classes.sharingArea}
				style={{ display: "flex", justifyContent: "center" }}
			>
				{links.fb && (
					<Button color="facebook" href={links.fb}>
						<i className={classes.socials + " fab fa-facebook-square"} />{" "}
						Facebook
					</Button>
				)}
				{links.tw && (
					<Button color="twitter" href={links.tw}>
						<i className={classes.socials + " fab fa-twitter"} /> Twitter
					</Button>
				)}
				{links.yt && (
					<Button color="danger" href={links.yt}>
						<i className={classes.socials + " fab fa-youtube"} />
						youtube
					</Button>
				)}
				{links.in && (
					<Button color="github" href={links.in}>
						<i className={classes.socials + " fab fa-instagram"} /> instagram
					</Button>
				)}
			</div>
		</>
	);
}
