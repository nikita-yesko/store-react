import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="item__img">
          <img src={"./img/product/" + this.props.item.img} alt="item" />
        </div>
        <div className="item__content">
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-card"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
