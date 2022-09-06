import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4";

import React from "react";

const Cover = () => {
	return (
		<div className="cover-container">
			<video
				className="video"
				src={coverVideo}
				autoPlay
				loop
				muted
			></video>
			<h1>Emanuel Heredia</h1>
			<p>| Front-End Developer |</p>
		</div>
	);
};

export default Cover;
