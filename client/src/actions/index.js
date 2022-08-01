import axios from "axios";
import { FETCH_USER } from "./types";

// MAKING A CALL TO OUR SERVER - using redux thunk

// Redux thunk automatically calls the internal function & passes in the dispatch function as an argument

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
