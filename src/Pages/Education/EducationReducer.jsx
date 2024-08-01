import { SET_EDUCATION } from "./EducationConstaints";

const initialState = {
  domain: "",
  university: "",
  degree: "",
  startYear: "",
  endYear: "",
};

const educationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default educationReducer;
