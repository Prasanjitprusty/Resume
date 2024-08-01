import { SET_EDUCATION } from "./EducationConstaints";

export const setEducation = (education) => ({
  type: SET_EDUCATION,
  payload: education,
});
