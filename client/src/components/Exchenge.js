import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Exchange extends Component {
  componentDidMount() {
    
  }

  translate(name) {
    switch (name) {
      case "equipment":
        return "Производственный комплекс";
      case "energy":
        return "Мегатонна сырья и энергии";
      case "tech":
        return "Комплект документации";
      case "transport":
        return "Подвижный состав";
      case "education":
        return "10 Учебных заведений";
      case "weapon":
        return "Боекомплект";
      case "housing":
        return "Микрорайон";
      case "supply":
        return "Киллотонна продавольствия";
      case "domestic":
        return "10 учереждений бытовых услуг";
    }
  }

  renderResourse(name) {
    const exchenge = this.props.exchenge;
    if (!exchenge.avalible) return null;
    return this.renderRow(
      this.translate(name),
      exchenge.avalible[name],
      (exchenge.prices[name] / 100).toFixed(2)
    );
  }

  renderRow(name, amount, price) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px white solid"
        }}
        className="center"
      >
        <div
          style={{
            flexBasis: "100%",
            borderRight: "1px white solid",
            padding: "10px 0"
          }}
        >
          {name}
        </div>
        <div
          style={{
            flexBasis: "100%",
            borderRight: "1px white solid",
            padding: "10px 0"
          }}
        >
          {amount}
        </div>
        <div style={{ flexBasis: "100%", padding: "10px 0" }}>{price}</div>
      </div>
    );
  }
  render() {
    return (
      <div className="card-panel blue-grey">
        <span className="white-text">
          {this.renderRow(
            "Наименование товара",
            "Колличество товара в наличии",
            "Цена еденицы товара"
          )}
          {this.renderResourse.bind(this)("equipment")}
          {this.renderResourse.bind(this)("energy")}
          {this.renderResourse.bind(this)("tech")}
          {this.renderResourse.bind(this)("transport")}
          {this.renderResourse.bind(this)("education")}
          {this.renderResourse.bind(this)("weapon")}
          {this.renderResourse.bind(this)("housing")}
          {this.renderResourse.bind(this)("supply")}
          {this.renderResourse.bind(this)("domestic")}
        </span>
      </div>
    );
  }
}

const mapStateToProps = ({ exchenge }) => {
  return { exchenge };
};

export default connect(mapStateToProps, actions)(Exchange);
