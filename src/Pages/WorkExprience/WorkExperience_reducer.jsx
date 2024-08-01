import { SET_WORK_EXPERIENCE } from './WorkExperience_action';

const initialState = {
  workExperienceData: [],
};

const workExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORK_EXPERIENCE:
      return {
        ...state,
        workExperienceData: action.payload,
      };
    default:
      return state;
  }
};

export default workExperienceReducer;
