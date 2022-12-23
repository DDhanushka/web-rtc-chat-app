import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Options = ({ children }) => {
	const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");

	const btnStyle =
		"ml-3 py-2 px-4 bg-blue-500 border-2 border-blue-500 hover:bg-blue-700 text-white rounded outline-none";
	const inputStyle = "ml-3 py-2 px-4 border-solid border-2 border-blue-500 outline-none";
	const title = "font-semibold text-lg pb-4"

	return (
		<div className="flex flex-row mt-3 justify-between">
			<div>
				<p className={title}>Account info</p>
				<label>Name: </label>
				<input
					className={inputStyle}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<CopyToClipboard text={me}>
					<button className={btnStyle}>Copy ID</button>
				</CopyToClipboard>
			</div>
			<div className="">
				<p className={title}>Make a call</p>
				<label>User ID: </label>
				<input
					className={inputStyle}
					value={idToCall}
					onChange={(e) => setIdToCall(e.target.value)}
				/>
				{callAccepted && !callEnded ? (
					<button
						onClick={leaveCall}
						className={btnStyle}
					>
						hang up
					</button>
				) : (
					<button onClick={() => callUser(idToCall)} className={btnStyle}>
						call
					</button>
				)}
				{children}
			</div>
		</div>
	);
};

export default Options;
