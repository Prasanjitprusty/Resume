import { SET_PERSONAL_INFORMATION } from "./personalInformationConstaints";


export const setPersonalInformation = (personalInformation) => ({
  type: SET_PERSONAL_INFORMATION,
  payload: personalInformation,
});
