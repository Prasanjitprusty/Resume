import { SET_PERSONAL_INFORMATION } from "./personalInformationConstaints";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  address: "",
  pincode: "",
  objective: "",
  profilePhoto: "",
};

const personalInformationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_INFORMATION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default personalInformationReducer;
