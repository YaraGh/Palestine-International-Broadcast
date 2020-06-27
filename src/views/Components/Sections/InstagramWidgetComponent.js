import * as React from "react";
import * as Scrivito from "scrivito";
import InstagramEmbed from "react-instagram-embed";
// import InPlaceEditingPlaceholder from '../../Components/InPlaceEditingPlaceholder';

Scrivito.provideComponent("InstagramWidget", ({ widget }) => {
	const url = widget.get("url");
	if (!url) {
		return (
			<>waiting</>
			// <InPlaceEditingPlaceholder center={true}>
			//     Use widget properties to input an Instagram Url
			// </InPlaceEditingPlaceholder>
		);
	}

	const maxWidth = widget.get("maxWidth");
	const hideCaption = widget.get("hideCaption");

	return (
		<InstagramEmbed
			align="center"
			url={url}
			maxWidth={maxWidth}
			hideCaption={hideCaption}
			containerTagName="div"
			injectScript={false}
			protocol=""
		/>
	);
});
