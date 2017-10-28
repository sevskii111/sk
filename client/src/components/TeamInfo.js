import React from "react";
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

export default props => {
  const team = props.team;
  return (
    <div style={{ fontSize: "20px" }} className="center-align">
      <div style={{ fontSize: "30px", fontWeight: "600" }}>{team.name}</div>
      <div style={flexContainer}>
        <div>
          <MdBorderAll />
          <br />
          {team.territory}
        </div>
        <div>
          <MdAttachMoney />
          <br />
          {team.money}
        </div>
        <div>
          <FaIndustry />
          <br />
          {team.equipment}
        </div>
        <div>
          <MdFlashOn />
          <br />
          {team.energy}
        </div>
        <div>
          <TiDocumentText />
          <br />
          {team.tech}
        </div>
        <div>
          <FaTruck />
          <br />
          {team.transport}
        </div>
        <div>
          <GoMortarBoard />
          <br />
          {team.education}
        </div>
        <div>
          <FaBuilding />
          <br />
          {team.housing}
        </div>
        <div>
          <FaCrosshairs />
          <br />
          {team.weapon}
        </div>
        <div>
          <MdLocalRestaurant />
          <br />
          {team.supply}
        </div>
        <div>
          <FaAmbulance />
          <br />
          {team.domestic}
        </div>
      </div>
      <div style={flexContainer}>
        <div>
          <Profession img={workerIconStr} profession={team.workers} />
        </div>
        <div>
          <Profession img={solderIconStr} profession={team.soldiers} />
        </div>
      </div>
    </div>
  );
};

const flexContainer = {
  display: "flex",
  justifyContent: "space-around",
  marginTop: "10px"
};

const Profession = props => {
  const p = props.profession;
  return (
    <div>
      <img src={props.img} style={{ height: "20px" }} alt="professionIcon" />
      <br />
      {!props.short ? p.amount - p.used + "/" : null}
      {p.amount}
    </div>
  );
};
