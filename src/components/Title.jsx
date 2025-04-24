import { Component } from "react";

export class Title extends Component {
  render() {
    return (
      <h1 className="font-bold uppercase text-center py-2 text-white text-lg">
        {this.props.name}
      </h1>
    );
  }
}

export class TitleCard extends Component {
  render() {
    return (
      <h4 className="font-bold uppercase text-center py-2 text-black">
        {this.props.name}
      </h4>
    );
  }
}
