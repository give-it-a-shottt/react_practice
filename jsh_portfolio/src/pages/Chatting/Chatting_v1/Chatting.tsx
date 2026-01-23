import React, { type ChangeEvent, Component, type KeyboardEvent } from "react";

type State = {
  msg: string;
  msgList: Array<string>;
};

export default class Chatting extends Component<{}, State> {
  chatRef = React.createRef<HTMLDivElement>();
  state: State = { msgList: [], msg: "" };

  getSnapshotBeforeUpdate(prevProps: {}, prevState: State): number {
    const chat = this.chatRef.current;
    if (prevState.msgList !== this.state.msgList && chat !== null) {
      return chat.offsetHeight;
    }
    return 0;
  }
  componentDidUpdate(prevProps: {}, prevState: State, snapshot: number) {
    const chat = this.chatRef.current;
    if (snapshot > 0 && chat !== null) {
      chat.scrollTop = chat.scrollHeight - snapshot;
    }
  }
  setMsg = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, msg: e.target.value });
  };
  msgKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.setState({
        msg: "",
        msgList: [...this.state.msgList, this.state.msg],
      });
    }
  };
  render() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-28">
        채팅 목록 <br />
        <div
          id="a"
          ref={this.chatRef}
          className="w-96 h-96 border overflow-y-auto">
          {this.state.msgList.map((item, index) => {
            return <h2 key={index}>{item}</h2>;
          })}
        </div>
        입력메시지 :{" "}
        <input
          className="border border-black"
          type="text"
          value={this.state.msg}
          onChange={this.setMsg}
          onKeyUp={this.msgKeyup}
        />
      </div>
    );
  }
}
