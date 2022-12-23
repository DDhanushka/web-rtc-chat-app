import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
		useContext(SocketContext);

	return (
		<div class="grid grid-cols-2 gap-4">
			{stream && (
				<div className="overflow-visible w-300  border-2 border-gray-300  shadow-md">
					<h5 className="p-5">{name || "Name"}</h5>
					<video playsInline muted ref={myVideo} autoPlay />
				</div>
			)}
			{callAccepted && !callEnded && (
				<div className=" min-w-300  border-2 border-gray-300 shadow-md">
					<h5 className="p-5">{call.name || "Name"}</h5>
					{/* <video playsInline ref={userVideo} autoPlay /> */}
					<video playsInline muted ref={userVideo} autoPlay />
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
