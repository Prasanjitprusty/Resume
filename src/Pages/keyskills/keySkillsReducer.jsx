import { ADD_SKILL,REMOVE_SKILL,UPDATE_SKILL} from "./keySkills_Constraints";

const initialState = [{ skill: "" }];

const keySkillsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SKILL:
      return [...state, { skill: "" }];
    case REMOVE_SKILL:
      return state.length > 1 ? state.filter((_, index) => index !== action.payload) : state;
    case UPDATE_SKILL:
      return state.map((skill, index) =>
        index === action.payload.index ? { skill: action.payload.skill } : skill
      );
    default:
      return state;
  }
};

export default keySkillsReducer;