import React, { Component } from "react";
import Clock from "./Clock";

type State = {
  formatString: string;
  clockVisible: boolean;
};

export default class App_v1 extends Component<{}, State> {
  state = {
    //HH:mm:ss
    //H시 m분 s초
    formatString: "HH:mm:ss",
    clockVisible: false,
  };

  changeFormat = (format: string) => {
    this.setState({ formatString: format });
  };

  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="border border-blue-300 py-4 px-4">
          <h2>간단한 디지털 시계</h2>
          <button
            className="border border-gray-500 px-2 py-1 my-2 rounded-2xl"
            onClick={() =>
              this.setState({ clockVisible: !this.state.clockVisible })
            }>
            시계 토글 버튼
          </button>
          <hr />
          {this.state.clockVisible ? (
            <Clock formatString={this.state.formatString} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
