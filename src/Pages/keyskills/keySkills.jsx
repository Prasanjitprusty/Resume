import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faTrash, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSkill,removeSkill,updateSkill } from "./keySkillsActions";

function KeySkills() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userSkills = useSelector((state) => state.keySkills);

  const getFormData = (e) => {
    e.preventDefault();
    navigate('/preview');
  };

  const handleInputForm = (index, e) => {
    const { value } = e.target;
    dispatch(updateSkill(index, value));
  };

  const addNewForm = () => {
    dispatch(addSkill());
  };

  const removeForm = (index) => {
    dispatch(removeSkill(index));
  };

  return (
    <div className="min-h-screen flex justify-center bg-yellow-200">
      <form
        onSubmit={getFormData}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg my-2 flex flex-col justify-between"
      >
        <div>
          <div className="font-bold mt-2 text-center scale-125 underline">
            <FontAwesomeIcon icon={faScrewdriverWrench} /> Key Skills
          </div>

          {userSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-4 mt-4 scale-100 items-center"
            >
              <div className="w-full md:w-1/2">
                <label htmlFor={`keySkills-${index}`}>Skills {index + 1}</label>
                <input
                  id={`keySkills-${index}`}
                  name="keySkills"
                  type="text"
                  placeholder="Enter your skills"
                  value={skill.skill}
                  onChange={(e) => handleInputForm(index, e)}
                  className="border rounded p-2 w-full text-sm"
                />
              </div>
              <FontAwesomeIcon
                className="mt-5 cursor-pointer"
                icon={faCirclePlus}
                onClick={addNewForm}
              />
              <FontAwesomeIcon
                className="mt-5 cursor-pointer"
                icon={faTrash}
                onClick={() => removeForm(index)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-auto gap-2 block">
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

export default KeySkills;
