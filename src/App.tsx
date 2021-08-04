import React, { useEffect, useState } from "react";
import "./App.css";
import AdminMain from "./components/AdminMain";
import LoginMain from "./components/LoginMain";
import UserMain from "./components/UserMain";

import { HashRouter, Route } from "react-router-dom";
function App() {
  const [ownerData, setOwnerData] = useState(0);

  useEffect(() => {
    const scriptRuntime = document.createElement("script");
    const scriptChunk = document.createElement("script");
    const scriptMain = document.createElement("script");

    const widgetContainer = document.getElementById("my-widget-container");

    // if (widgetContainer) widgetContainer.innerHTML = "";

    // console.log("widgetContainer.children:", widgetContainer?.children);

    (widgetContainer as HTMLElement).appendChild(scriptRuntime);
    (widgetContainer as HTMLElement).appendChild(scriptChunk);
    (widgetContainer as HTMLElement).appendChild(scriptMain);

    scriptRuntime.src = "/my-widget/static/js/my-widget.js";
    scriptChunk.src = "/my-widget/static/js/my-widget.2.js";
    scriptMain.src = "/my-widget/static/js/my-widget.main.js";

    return () => {};
  }, [ownerData]);

  const handleClick = () => {
    setOwnerData(ownerData + 1);
  };

  const handleWidgetCall = () => {
    window.alert("This is the main app!");
  };

  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/login" component={LoginMain} />
      </HashRouter>
      <AdminMain />
      <UserMain />
      <div
        id="my-widget-container"
        owner-data={ownerData}
        owner-handler={handleWidgetCall}
      />
      <button onClick={handleClick}>
        Inc owner data (current value: {ownerData})
      </button>
    </div>
  );
}

export default App;
