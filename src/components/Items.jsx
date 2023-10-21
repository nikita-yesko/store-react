import React, { Component } from "react";
import Item from "./Item";

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map((element) => (
          <Item item={element} key={element.id} onAdd={this.props.onAdd} />
        ))}
      </main>
    );
  }
}

export default Items;
