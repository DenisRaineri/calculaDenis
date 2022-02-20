import * as types from "./types";
import { Dispatch } from "redux";

export function addNumber(input: string, dispatch: Dispatch): void {
  dispatch({
    type: types.ADD_NUMBER,
    input,
  });
}

export function cleanInput(dispatch: Dispatch) {
  dispatch({
    type: types.CLEAR,
    input: "",
  });
}

export function getResult(input: string, dispatch: Dispatch) {

  dispatch({
    type: types.RESULT,
    input,
  });
}