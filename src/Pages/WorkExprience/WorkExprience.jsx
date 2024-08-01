import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { setWorkExperience } from "./WorkExperience_action"; // Assuming you have defined this action
import WorkExperienceDetails from "./WorkExprienceDetails";


function WorkExperience() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState([
    { jobTitle: "", organizationName: "", startYear: "", endYear: "" },
  ]);

  const handleInputForm = (index, e) => {
    const { name, value } = e.target;
    const updatedUserInfo = userInfo.map((info, i) =>
      i === index ? { ...info, [name]: value } : info
    );
    setUserInfo(updatedUserInfo);
  };

  const getFormData = (e) => {
    e.preventDefault();
    dispatch(setWorkExperience(userInfo));
    navigate("/education");
  };

  const addNewForm = () => {
    setUserInfo([
      ...userInfo,
      { jobTitle: "", organizationName: "", startYear: "", endYear: "" },
    ]);
    const newParam = `company${userInfo.length + 1}`;
    searchParams.set(newParam, newParam);
    setSearchParams(searchParams);
  };

  const removeForm = (index) => {
    const updatedUserInfo = userInfo.filter((_, i) => i !== index);
    setUserInfo(updatedUserInfo);

    const removedParam = `company${index + 1}`;
    searchParams.delete(removedParam);
    setSearchParams(searchParams);
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
        <div className="font-bold mt-2 text-center scale-125">
          <FontAwesomeIcon icon={faBriefcase} /> Work Experience
        </div>
        {userInfo.map((info, index) => (
          <WorkExperienceDetails
            key={index}
            info={info}
            index={index}
            handleInputForm={handleInputForm}
            removeForm={removeForm}
            addNewForm={addNewForm}
            yearOptions={yearOptions}
            navigate={navigate}
          />
        ))}
      </form>
    </div>
  );
}

export default WorkExperience;
