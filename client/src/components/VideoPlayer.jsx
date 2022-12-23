import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
	const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
		useContext(SocketContext);

	return (
		<div classname="grid grid-cols-2">
			{stream && (
				<div className="w-500 overflow-clip border-2 border-gray-300  shadow-md">
					<h5 className="p-5">{name || "Name"}</h5>
					<video playsInline muted ref={myVideo} autoPlay />
				</div>
			)}
			{callAccepted && !callEnded && (
				<div className=" border-2 border-gray-300 shadow-md">
					<h5 className="p-5">{call.name || "Name"}</h5>
					<video playsInline muted ref={userVideo} autoPlay />
				</div>
			)}
		</div>
	);
};

export default VideoPlayer;
