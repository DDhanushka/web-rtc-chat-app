import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = ({ children }) => {
	const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");

	return (
		<div className="flex flex-row">
			<div>
				<input
					className=" border-solid border-2 border-blue-500"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<p>Account info</p>
				{console.log('me', me)}
				<CopyToClipboard text={me}>
					<button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded">
						Copy ID
					</button>
				</CopyToClipboard>
			</div>
			<div>
				<p>Make a call</p>
				<input
					className=" border-solid border-2 border-blue-500"
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				{callAccepted && !callEnded ? (
					<button
						onClick={leaveCall}
						className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
					>
						hang up
					</button>
				) : (
					<button
						onClick={() => callUser(idToCall)}
						className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded"
					>
						call
					</button>
				)}
				{children}
			</div>
		</div>
	);
};

export default Options;
