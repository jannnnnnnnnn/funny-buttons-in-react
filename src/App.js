import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  state = { selection: ["", "selected", "", "", ""] };

  handleOnClick = (idx) => {
    let selection = ["", "", "", "", ""];
    selection[idx] = "selected";
    this.setState({ selection });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          {/* <body> */}
          <CircleSelector
            selection={this.state.selection}
            handleOnClick={this.handleOnClick}
          />

          <Circles
            selection={this.state.selection}
            handleOnClick={this.handleOnClick}
          />
          {/* </body> */}
        </main>
      </div>
    );
  }
}

export default App;
