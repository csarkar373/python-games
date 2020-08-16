import React from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import ListGameEngine from "./listcomponents/ListGameEngine";
import StringGameEngine from "./stringcomponents/StringGameEngine";
import * as AppConstants from "./util/appconstants";
import RelationalGameEngine from "./relationalcomponents/RelationalGameDesign";
import BooleanGameEngine from "./booleancomponents/BooleanGameEngine";
import MixedGameEngine from "./mixedcomponents/MixedGameEngine";
import LoopGameEngine from "./loopcomponents/LoopGameEngine";
// eslint-disable-next-line
class App extends React.Component {
  constructor(props) {
    super(props);

    this.gameEngines = [
      <StringGameEngine />,
      <RelationalGameEngine />,
      <BooleanGameEngine />,
      <LoopGameEngine />,
      <ListGameEngine />,
      <MixedGameEngine />,
    ];
    this.state = {
      currentGame: this.gameEngines[AppConstants.DEFAULTGAMEINDEX],
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(e) {
    this.setState({ currentGame: this.gameEngines[e.target.id] });
    //console.log("button clicked", this.gameEngines[e.target.id]);
  }

  render() {
    return (
      <div className="Outer">
        <div className="App">
          <nav className="navbar navbar-nav navbar-dark bg-danger m-1">
            <h2>
              <i>{AppConstants.APPTITLE}</i>
            </h2>
            <div>
              <button
                onClick={this.handleButton}
                id={AppConstants.STRINGGAMEINDEX}
                className="btn btn-sm btn-danger m-1"
              >
                Strings
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.RELATIONALGAMEINDEX}
                className="btn btn-sm btn-danger m-1"
              >
                Relational
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.BOOLEANGAMEINDEX}
                className="btn btn-sm btn-danger m-1"
              >
                Boolean
              </button>
              <button
                // autoFocus
                onClick={this.handleButton}
                id={AppConstants.LOOPGAMEINDEX}
                className="btn btn-sm btn-danger m-1"
              >
                Loops
              </button>
              <button
                id={AppConstants.LISTGAMEINDEX}
                onClick={this.handleButton}
                className="btn btn-sm btn-danger m-1"
              >
                Lists
              </button>
              <button
                onClick={this.handleButton}
                id={AppConstants.MIXEDGAMEINDEX}
                className="btn btn-sm btn-danger m-1"
              >
                Mixed
              </button>
            </div>
          </nav>

          {this.state.currentGame}

          <footer className="page-footer font-small blue m-2 pt-4">
            <div className="footer-copyright text-center py-3">
              {AppConstants.DISCLAIMER}
              <a href="https://sites.google.com/view/codinggames/home">
                https://sites.google.com/view/codinggames/home
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
