import {axiosWithAuth} from "../../src/axiosWithAuth";
import * as types from "./actionTypes";

export const getPost = () => dispatch => {
    dispatch({
        type: types.GET_POST_START
    });
    axiosWithAuth()
    .get("/character")
    .then(res => {
        dispatch({
            type: types.GET_POST_SUCCESS,
            payload: res.data.journals
        })
    })
    .catch(err => {
        console.log(err);
    })
}