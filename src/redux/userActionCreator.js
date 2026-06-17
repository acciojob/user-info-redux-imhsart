import { UPDATE_EMAIL, UPDATE_NAME } from "./actionTypes";

export const update_name = (text) => {
  return {
    type: UPDATE_NAME,
    payload: text
  }
}

export const update_email = (text) => {
  return {
    type: UPDATE_EMAIL,
    payload: text
  }
}

