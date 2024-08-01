import React from 'react';
import { connect } from 'react-redux';

const Preview = ({ template, workExperience }) => {
  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>Selected Template</h2>
        {template ? (
          <img src={template} alt="Selected Template" />
        ) : (
          <p>No template selected</p>
        )}
      </div>
      <div>
        <h2>Work Experience</h2>
        {workExperience.length > 0 ? (
          workExperience.map((experience, index) => (
            <div key={index}>
              <p>Job Title: {experience.jobTitle}</p>
              <p>Organization Name: {experience.organizationName}</p>
              <p>Start Year: {experience.startYear}</p>
              <p>End Year: {experience.endYear}</p>
            </div>
          ))
        ) : (
          <p>No work experience added</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  template: state.template?.templateData, // Ensure templateData is mapped
  workExperience: state.workExperience?.workExperience || [], // Ensure workExperience is an array
});

export default connect(mapStateToProps)(Preview);
