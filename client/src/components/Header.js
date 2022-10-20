import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

class Header extends Component {
  render() {
    return (
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <ul className="left">
            <li>
              <Link to="actions">Действия</Link>
            </li>
            <li>
              <Link to="teams">Команды</Link>
            </li>
            <li>
              <Link to="exchenge">Биржа</Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <a
                href="#"
                onClick={() => {
                  if (window.confirm('Вы уверены что хотите завершить год?')) {
                    this.props.resetYear();
                  } 
                }}
              >
                Закончить год
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  if (window.confirm('Вы уверены что хотите сбросить биржу?')) {
                    this.props.resetExchenge();
                  } 
                }}
              >
                Сбросить биржу
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(Header);
