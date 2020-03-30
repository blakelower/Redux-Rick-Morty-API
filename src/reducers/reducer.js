import * as types from "../actions/actionTypes";

const initialValues = {
  journals: []
};

export const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_POST_START:
      return initialValues;
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        journals: action.payload
      };
    default:
      return state;
  }
};
