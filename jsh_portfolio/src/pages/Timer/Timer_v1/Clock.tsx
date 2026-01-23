import _React, { Component } from "react";
import * as DateAndTime from "date-and-time";
import { current } from "immer";

type props = {
  formatString: string;
};

type state = {
  currentTime: Date;
};

export default class Clock extends Component<props, state> {
  state = {
    currentTime: new Date(),
  };

  componentDidMount(): void {
    setInterval(() => {
      this.setState({ currentTime: new Date() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3 className="border border-gray-950 text-center my-2">
          {DateAndTime.format(this.state.currentTime, this.props.formatString)}
        </h3>
      </div>
    );
  }
}
