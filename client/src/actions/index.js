import axios from "axios";
import {
  FETCH_USER,
  ERROR,
  CLOSE_ERROR,
  FETCH_TEAMS,
  FETCH_USERS,
  FETCH_ACTIONS,
  SET_TAB,
  FETCH_PROJECTS,
  FETCH_EXCHENGE
} from "./types";

export const checkRights = () => async dispatch => {
  try {
    const res = await axios.get("/api/auth");
    dispatch({ type: FETCH_USER, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR, payload: "Не удалось проверить аунтификацию" });
  }
};

export const closeError = index => async dispatch => {
  dispatch({ type: CLOSE_ERROR, payload: index });
};

export const fetchTeams = () => async dispatch => {
  const res = await axios.get("/api/teams");
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};

export const createTeam = name => async dispatch => {
  try {
    const res = await axios.post("/api/teams/create", { name });
    dispatch({ type: FETCH_TEAMS, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR, payload: "Не удалось создать команду" });
  }
};

export const renameTeam = (oldName, name) => async dispatch => {
  try {
    const res = await axios.post("/api/teams/rename", { oldName, name });
    dispatch({ type: FETCH_TEAMS, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR, payload: "Не удалось переиминовать команду" });
  }
};

export const deleteTeam = name => async dispatch => {
  try {
    const res = await axios.post("/api/teams/delete", { name });
    dispatch({ type: FETCH_TEAMS, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR, payload: "Не удалось удалить команду" });
  }
};

export const fetchActions = () => async dispatch => {
  const res = await axios.get("/api/settings");
  dispatch({ type: FETCH_ACTIONS, payload: res.data.actions });
};

export const doAction = state => async dispatch => {
  if (!state.selectedTeam)
    return dispatch({ type: ERROR, payload: "Выберети команду" });
  try {
    const res = await axios.post("/api/transaction", {
      teamId: state.selectedTeam._id,
      type: state.type,
      outcome: {
        workers: +state.workersI,
        soldiers: +state.soldiersI,
        workersP: +state.workerspI,
        soldiersP: +state.soldierspI,
        territory: +state.territoryI,
        money: +state.moneyI,
        equipment: +state.equipmentI,
        energy: +state.energyI,
        tech: +state.techI,
        transport: +state.transportI,
        education: +state.educationI,
        weapon: +state.weaponI,
        housing: +state.housingI,
        supply: +state.supplyI,
        domestic: +state.domesticI
      },
      income: {
        workers: +state.workersO,
        soldiers: +state.soldiersO,
        workersP: +state.workerspO,
        soldiersP: +state.soldierspO,
        territory: +state.territoryO,
        money: +state.moneyO,
        equipment: +state.equipmentO,
        energy: +state.energyO,
        tech: +state.techO,
        transport: +state.transportO,
        education: +state.educationO,
        weapon: +state.weaponO,
        housing: +state.housingO,
        supply: +state.supplyO,
        domestic: +state.domesticO
      }
    });
    dispatch({ type: FETCH_TEAMS, payload: res.data });
  } catch (e) {
    return dispatch({ type: ERROR, payload: e.response.data });
  }
};

export const fetchExchenge = () => async dispatch => {
  const res = await axios.get("/api/exchenge/");
  dispatch({ type: FETCH_EXCHENGE, payload: res.data });
};

export const resetExchenge = () => async dispatch => {
  await axios.post("/api/exchenge/generate");
};

export const resetYear = () => async dispatch => {
  const res = await axios.post("/api/team/endyear");
  dispatch({ type: FETCH_TEAMS, payload: res.data });
};
