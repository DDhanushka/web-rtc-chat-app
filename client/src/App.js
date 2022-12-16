import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notfications from "./components/Notfications";

const App = () => {
  return (
    <div className=" bg-slate-300 min-h-screen">
      <div className="">
        <h1 className="text-4xl font-bold mb-5 bg-slate-500 p-10 text-center">
          Video Chat
        </h1>
        <div className="px-10">
          <VideoPlayer />
          <Options>
            <Notfications />
          </Options>
        </div>
      </div>
    </div>
  );
};

export default App;
