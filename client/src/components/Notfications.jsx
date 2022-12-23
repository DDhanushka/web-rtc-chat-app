import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const Notfications = () => {
	const { answerCall, call, callAccepted } = useContext(SocketContext);
	return (
		<>
			{call.isRecievedCall && !callAccepted && (
				<div className="flex">
					<h1>{call.name} is calling:</h1>
					<button
						onClick={answerCall}
						className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
					>
						Answer
					</button>
				</div>
			)}
		</>
	);
};

export default Notfications;
