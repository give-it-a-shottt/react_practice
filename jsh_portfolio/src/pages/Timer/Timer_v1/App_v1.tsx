import React, { Component } from "react";
import Clock from "./Clock";

type State = {
  formatString: string;
};

export default class App_v1 extends Component<{}, State> {
  state = {
    //HH:mm:ss
    //H시 m분 s초
    formatString: "HH:mm:ss",
  };

  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="border border-blue-300 py-4 px-4">
          <h2>간단한 디지털 시계</h2>
          <hr />
          <Clock formatString={this.state.formatString} />
        </div>
      </div>
    );
  }
}
