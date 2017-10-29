import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import "react-select/dist/react-select.css";

import {
  MdLandscape,
  MdBorderAll,
  MdAttachMoney,
  MdFlashOn,
  MdLocalRestaurant
} from "react-icons/lib/md";
import { TiWaves, TiDocumentText } from "react-icons/lib/ti";
import {
  FaIndustry,
  FaTruck,
  FaBuilding,
  FaAmbulance,
  FaCrosshairs
} from "react-icons/lib/fa";
import { GoMortarBoard } from "react-icons/lib/go";
import {
  workerIconStr,
  farmerIconStr,
  intelectualIconStr,
  jobholderIconStr,
  solderIconStr,
  childrenIconStr,
  pensionerIconStr
} from "../icons";

import * as actions from "../actions";

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplyer: 1,
      selectedProject: undefined,
      selectedTeam: null,
      workersI: 0,
      soldiersI: 0,
      workerspI: 0,
      soldierspI: 0,
      territoryI: 0,
      moneyI: 0,
      equipmentI: 0,
      energyI: 0,
      techI: 0,
      transportI: 0,
      educationI: 0,
      weaponI: 0,
      housingI: 0,
      supplyI: 0,
      domesticI: 0,
      workersO: 0,
      soldiersO: 0,
      workerspO: 0,
      soldierspO: 0,
      territoryO: 0,
      moneyO: 0,
      equipmentO: 0,
      energyO: 0,
      techO: 0,
      transportO: 0,
      educationO: 0,
      weaponO: 0,
      housingO: 0,
      supplyO: 0,
      domesticO: 0,
      type: "number"
    };
  }

  componentDidMount() {
    this.props.fetchTeams();
    this.props.fetchActions();
  }

  render() {
    if (!this.props.exchenge.prices) return null;
    let actions = [];
    const keys = Object.keys(this.props.actions);
    for (let i = 0; i < keys.length; i++) {
      actions[keys[i]] = this.props.actions[keys[i]];
    }
    actions.push({
      name: "Биржа:Покупка производствнных комлексов",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.equipment / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 1,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка мегатонны сырья и энергии",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.energy / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 1,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка комплекта документации",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.tech / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 1,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка подвижного состава",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.transport / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 1,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка 10 учебных заведений",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.education / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 1,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка боекомплекта",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.weapon / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 1,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка микрорайона",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.housing / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 1,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка киллотонны продовольствия",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.supply / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 1,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Покупка 10 учереждений бытовых услуг",
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.domestic / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 1
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа производствнных комлексов",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.equipment / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 1,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа мегатонны сырья и энергии",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.energy / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 1,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа комплекта документации",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.tech / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 1,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа подвижного состава",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.transport / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 1,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа 10 учебных заведений",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.education / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 1,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа боекомплекта",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.weapon / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 1,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа микрорайона",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.housing / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 1,
        supply: 0,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа киллотонны продовольствия",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.supply / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 1,
        domestic: 0
      },
      type: "exchenge"
    });
    actions.push({
      name: "Биржа:Продажа 10 учереждений бытовых услуг",
      outcome: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: this.props.exchenge.prices.domestic / 100,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 0
      },
      income: {
        workers: 0,
        soldiers: 0,
        workersP: 0,
        soldiersP: 0,
        territory: 0,
        money: 0,
        equipment: 0,
        energy: 0,
        tech: 0,
        transport: 0,
        education: 0,
        weapon: 0,
        housing: 0,
        supply: 0,
        domestic: 1
      },
      type: "exchenge"
    });
    const actionsOptions = [
      { label: "Ручное действие", value: "" },
      ...actions.map(a => {
        return { label: a.name, value: a.name };
      })
    ];
    const teamsOptions = this.props.teams.map(t => {
      return { label: t.name, value: t.name };
    });
    return (
      <div className="row">
        <div className="col s12">
          <div className="card-panel blue-grey">
            <span className="white-text center">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px"
                }}
              >
                <Select
                  options={actionsOptions}
                  value={
                    this.state.selectedProject
                      ? this.state.selectedProject.name
                      : ""
                  }
                  placeholder="Ручное действие"
                  name="project"
                  onChange={t => {
                    if (!t) return this.setState({ selectedProject: "" });
                    const project = actions.find(a => a.name == t.value);
                    this.setState({
                      selectedProject: project,
                      multiplyer: 1
                    });

                    if (project) {
                      const { income, outcome } = project;
                      const m = 1;
                      this.setState({
                        workersI: income.workers * m,
                        soldiersI: income.soldiers * m,
                        workerspI: income.workersP * m,
                        soldierspI: income.soldiersP * m,
                        territoryI: income.territory * m,
                        moneyI: Math.ceil(income.money * m),
                        equipmentI: income.equipment * m,
                        energyI: income.energy * m,
                        techI: income.tech * m,
                        transportI: income.transport * m,
                        educationI: income.education * m,
                        weaponI: income.weapon * m,
                        housingI: income.housing * m,
                        supplyI: income.supply * m,
                        domesticI: income.domestic * m,
                        workersO: outcome.workers * m,
                        soldiersO: outcome.soldiers * m,
                        workerspO: outcome.workersP * m,
                        soldierspO: outcome.soldiersP * m,
                        territoryO: outcome.territory * m,
                        moneyO: Math.floor(outcome.money * m),
                        equipmentO: outcome.equipment * m,
                        energyO: outcome.energy * m,
                        techO: outcome.tech * m,
                        transportO: outcome.transport * m,
                        educationO: outcome.education * m,
                        weaponO: outcome.weapon * m,
                        housingO: outcome.housing * m,
                        supplyO: outcome.supply * m,
                        domesticO: outcome.domestic * m,
                        type: project.type
                      });
                    } else {
                      this.setState({
                        workersI: 0,
                        soldiersI: 0,
                        workerspI: 0,
                        soldierspI: 0,
                        territoryI: 0,
                        moneyI: 0,
                        equipmentI: 0,
                        energyI: 0,
                        techI: 0,
                        transportI: 0,
                        educationI: 0,
                        weaponI: 0,
                        housingI: 0,
                        supplyI: 0,
                        domesticI: 0,
                        workersO: 0,
                        soldiersO: 0,
                        workerspO: 0,
                        soldierspO: 0,
                        territoryO: 0,
                        moneyO: 0,
                        equipmentO: 0,
                        energyO: 0,
                        techO: 0,
                        transportO: 0,
                        educationO: 0,
                        weaponO: 0,
                        housingO: 0,
                        supplyO: 0,
                        domesticO: 0,
                        selectedProject: "",
                        type: "number"
                      });
                    }
                  }}
                  style={{ width: "350px" }}
                />
                <input
                  type="number"
                  style={{ width: "50px", margin: "0 10px" }}
                  value={this.state.multiplyer}
                  min="1"
                  disabled={!this.state.selectedProject}
                  onChange={e => {
                    this.setState({ multiplyer: e.target.value });
                    if (this.state.selectedProject) {
                      const { income, outcome } = this.state.selectedProject;
                      const m = e.target.value;
                      this.setState({
                        workersI: income.workers * m,
                        soldiersI: income.soldiers * m,
                        workerspI: income.workersP * m,
                        soldierspI: income.soldiersP * m,
                        territoryI: income.territory * m,
                        moneyI: Math.ceil(income.money * m),
                        equipmentI: income.equipment * m,
                        energyI: income.energy * m,
                        techI: income.tech * m,
                        transportI: income.transport * m,
                        educationI: income.education * m,
                        weaponI: income.weapon * m,
                        housingI: income.housing * m,
                        supplyI: income.supply * m,
                        domesticI: income.domestic * m,
                        workersO: outcome.workers * m,
                        soldiersO: outcome.soldiers * m,
                        workerspO: outcome.workers * m,
                        soldierspO: outcome.soldiersP * m,
                        territoryO: outcome.territory * m,
                        moneyO: Math.floor(outcome.money * m),
                        equipmentO: outcome.equipment * m,
                        energyO: outcome.energy * m,
                        techO: outcome.tech * m,
                        transportO: outcome.transport * m,
                        educationO: outcome.education * m,
                        weaponO: outcome.weapon * m,
                        housingO: outcome.housing * m,
                        supplyO: outcome.supply * m,
                        domesticO: outcome.domestic * m
                      });
                    }
                  }}
                />
                <div className="switch">
                  <label className="white-text">
                    %
                    <br />
                    <input
                      type="checkbox"
                      onChange={e => {
                        const type =
                          this.state.type != "percent" ? "percent" : "number";
                        this.setState({
                          type
                        });
                      }}
                      checked={this.state.type == "percent"}
                      value={this.state.type == "percent"}
                      disabled={this.state.selectedProject}
                    />
                    <span className="lever" />
                  </label>
                </div>
                <Select
                  options={teamsOptions}
                  value={
                    this.state.selectedTeam
                      ? this.state.selectedTeam.name
                      : null
                  }
                  name="team"
                  placeholder="Выберите команду"
                  onChange={a => {
                    if (!a) return this.setState({ selectedTeam: undefined });

                    this.setState({
                      selectedTeam: this.props.teams.find(
                        t => a.value == t.name
                      )
                    });
                  }}
                  style={{ width: "350px" }}
                />
                <button
                  className="btn"
                  onClick={() => {
                    this.props.doAction(this.state);
                  }}
                >
                  Выполнить
                </button>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <MdBorderAll style={sameWidthStyle} />
                <MdAttachMoney style={sameWidthStyle} />
                <FaIndustry style={sameWidthStyle} />
                <MdFlashOn style={sameWidthStyle} />
                <TiDocumentText style={sameWidthStyle} />
                <FaTruck style={sameWidthStyle} />
                <GoMortarBoard style={sameWidthStyle} />
                <FaCrosshairs style={sameWidthStyle} />
                <FaBuilding style={sameWidthStyle} />
                <MdLocalRestaurant style={sameWidthStyle} />
                <FaAmbulance style={sameWidthStyle} />
                <img
                  src={workerIconStr}
                  style={{ ...sameWidthStyle, filter: "grayscale(100%)" }}
                />
                <img src={workerIconStr} style={sameWidthStyle} />
                <img
                  src={solderIconStr}
                  style={{ ...sameWidthStyle, filter: "grayscale(100%)" }}
                />
                <img src={solderIconStr} style={sameWidthStyle} />
              </div>
              <div style={{ justifyContent: "space-between", display: "flex" }}>
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.territoryI}
                  onChange={e => this.setState({ territoryI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.moneyI}
                  onChange={e => this.setState({ moneyI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  type="number"
                  min="0"
                  value={this.state.equipmentI}
                  onChange={e => this.setState({ equipmentI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.energyI}
                  onChange={e => this.setState({ energyI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.techI}
                  onChange={e => this.setState({ techI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.transportI}
                  onChange={e => this.setState({ transportI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.educationI}
                  onChange={e => this.setState({ educationI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.weaponI}
                  onChange={e => this.setState({ weaponI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.housingI}
                  onChange={e => this.setState({ housingI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.supplyI}
                  onChange={e => this.setState({ supplyI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.domesticI}
                  onChange={e => this.setState({ domesticI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.workersI}
                  onChange={e => this.setState({ workersI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.workerspI}
                  onChange={e => this.setState({ workerspI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />

                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.soldiersI}
                  onChange={e => this.setState({ soldiersI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.soldierspI}
                  onChange={e => this.setState({ soldierspI: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.territoryO}
                  onChange={e => this.setState({ territoryO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.moneyO}
                  onChange={e => this.setState({ moneyO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  type="number"
                  min="0"
                  value={this.state.equipmentO}
                  onChange={e => this.setState({ equipmentO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.energyO}
                  onChange={e => this.setState({ energyO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.techO}
                  onChange={e => this.setState({ techO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.transportO}
                  onChange={e => this.setState({ transportO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.educationO}
                  onChange={e => this.setState({ educationO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.weaponO}
                  onChange={e => this.setState({ weaponO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.housingO}
                  onChange={e => this.setState({ housingO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.supplyO}
                  onChange={e => this.setState({ supplyO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.domesticO}
                  onChange={e => this.setState({ domesticO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />

                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.workersO}
                  onChange={e => this.setState({ workersO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.workerspO}
                  onChange={e => this.setState({ workerspO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.soldiersO}
                  onChange={e => this.setState({ soldiersO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
                <input
                  style={sameInputWidthStyle}
                  type="number"
                  min="0"
                  value={this.state.soldierspO}
                  onChange={e => this.setState({ soldierspO: e.target.value })}
                  disabled={!!this.state.selectedProject}
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const sameWidthStyle = {
  width: "50px",
  fontSize: "50px",
  margin: "0 2px",
  height: "50px"
};
const sameInputWidthStyle = {
  width: "50px",
  fontSize: "15px",
  margin: "0 2px",
  height: "50px"
};

const mapStateToProps = ({ teams, actions, exchenge }) => {
  return { teams, actions, exchenge };
};

export default connect(mapStateToProps, actions)(Actions);
