import { ADD_SKILL,REMOVE_SKILL,UPDATE_SKILL } from "./keySkills_Constraints";

export const addSkill = (skill) => ({
  type: ADD_SKILL,
  payload: skill,
});

export const removeSkill = (index) => ({
  type: REMOVE_SKILL,
  payload: index,
});

export const updateSkill = (index, skill) => ({
  type: UPDATE_SKILL,
  payload: { index, skill },
});
