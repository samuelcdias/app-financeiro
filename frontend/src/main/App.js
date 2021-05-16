import React from "react";
import Routes from "./routes";

import "../custom.css";
import "primeicons/primeicons.css";
import "bootswatch/dist/flatly/bootstrap.css";
import Navbar from "../components/Navbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <Routes />
        </div>
      </>
    );
  }
}

export default App;
