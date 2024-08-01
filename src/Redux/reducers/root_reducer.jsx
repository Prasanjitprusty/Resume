import { combineReducers } from 'redux';
import templateReducer from '../../Pages/Home/Template_reducer';
import workExperienceReducer from '../../Pages/WorkExprience/WorkExperience_reducer'
import keySkillsReducer from '../../Pages/keyskills/keySkillsReducer';
import educationReducer from '../../Pages/Education/EducationReducer';
import personalInformationReducer from '../../Pages/PersonalInformation/personalInformationReducer'


const rootReducer = combineReducers({
  template: templateReducer,
  workExperience: workExperienceReducer,
  keySkills: keySkillsReducer,
  education: educationReducer,
  personalInformation: personalInformationReducer,

});

export default rootReducer;
