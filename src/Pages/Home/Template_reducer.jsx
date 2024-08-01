import { SET_TEMPLATE,UPDATE_TEMPLATE } from "./Template_Constraints";

const initialState = {
  templateData: [],
};

export default function templateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TEMPLATE:
      return {
        ...state,
        templateData: action.payload,
      };

    case UPDATE_TEMPLATE:      
      return {
        ...state,
        templateData: action.payload,
      };
      default:
        return state
  }
}
