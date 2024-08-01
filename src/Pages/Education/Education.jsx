import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';
import EducationDetails from './EducationDetails';
import { setEducation } from './educationActions';

function Education() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.education);

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    dispatch(setEducation({ ...userInfo, [name]: value }));
  };

  const getFormData = (e) => {
    e.preventDefault();
    console.log("Domain:", userInfo.domain);
    console.log("University:", userInfo.university);
    console.log("Degree:", userInfo.degree);
    console.log("Start Year:", userInfo.startYear);
    console.log("End Year:", userInfo.endYear);

    navigate("/keyskills");
  };

  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1900;
    const years = [];
    for (let year = startYear; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  const yearOptions = generateYearOptions();

  return (
    <div className="min-h-screen flex justify-center bg-yellow-200">
      <form
        onSubmit={getFormData}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg mt-4 mx-auto flex flex-col"
      >
        <div className="font-bold mt-2 text-center scale-125 underline">
          <FontAwesomeIcon icon={faGraduationCap} /> Education Details
        </div>

        <EducationDetails
          userInfo={userInfo}
          handleInputForm={handleInputForm}
          yearOptions={yearOptions}
        />

        <div className="flex justify-end mr-2 mt-auto gap-2">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-gray-300 px-6 py-2 rounded"
          >
            Back
          </button>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded text-white"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Education;
