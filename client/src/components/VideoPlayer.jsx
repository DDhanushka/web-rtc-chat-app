import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
		useContext(SocketContext);

	return (
		<div class="flex">
			{stream && (
				<div className="border-2 border-gray-300 shadow-md w-1/2 h-auto">
					<h5 className="p-5">{name || "Name"}</h5>
					<video playsInline muted ref={myVideo} autoPlay className="w-full" />
				</div>
			)}
			{callAccepted && !callEnded && (
				<div className="border-2 border-gray-300 shadow-md w-1/2 h-auto">
					<h5 className="p-5">{call.name || "Name"}</h5>
					<video playsInline ref={userVideo} autoPlay className="w-full" />
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
