import React from "react";

function WorkExperienceDetails({
  info,
  index,
  handleInputForm,
  removeForm,
  addNewForm,
  yearOptions,
  navigate,
}) {
  return (
    <div className="mt-4 flex flex-col h-full">
      <label
        htmlFor={`organizationName-${index}`}
        className="block text-center scale-100 underline"
      >
        ( Organization / Company ) {index + 1}
      </label>
      <div className="flex flex-col md:flex-row gap-4 mt-4 mx-7 text-sm">
        <div className="flex-1 scale-100">
          <label htmlFor={`jobTitle-${index}`} className="flex justify-start">
            Job Title
          </label>
          <input
            type="text"
            id={`jobTitle-${index}`}
            name="jobTitle"
            placeholder="Job Title"
            value={info.jobTitle}
            onChange={(e) => handleInputForm(index, e)}
            className="border rounded p-2 w-full text-sm"
          />
        </div>
        <div className="flex-1 scale-100">
          <label
            htmlFor={`organizationName-${index}`}
            className="flex justify-start text-sm"
          >
            Organization Name
          </label>
          <input
            type="text"
            id={`organizationName-${index}`}
            name="organizationName"
            placeholder="Organization Name"
            value={info.organizationName}
            onChange={(e) => handleInputForm(index, e)}
            className="border rounded p-2 w-full text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4 mx-7">
        <div className="flex-1 scale-100">
          <label
            htmlFor={`startYear-${index}`}
            className="flex justify-start text-sm"
          >
            Start Year
          </label>
          <select
            id={`startYear-${index}`}
            name="startYear"
            value={info.startYear}
            onChange={(e) => handleInputForm(index, e)}
            className="border rounded p-2 w-full text-sm"
          >
            <option value="">Select Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 scale-100">
          <label
            htmlFor={`endYear-${index}`}
            className="flex justify-start text-sm"
          >
            End Year
          </label>
          <select
            id={`endYear-${index}`}
            name="endYear"
            value={info.endYear}
            onChange={(e) => handleInputForm(index, e)}
            className="border rounded p-2 w-full text-sm"
          >
            <option value="">Select Year</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div
        onClick={addNewForm}
        className="cursor-pointer scale-75 text-blue-700 underline text-center mx-32 mt-5"
      >
        Add New
      </div>

      <div className="flex justify-between gap-4 ">
        <button
          type="button"
          onClick={() => removeForm(index)}
          className="text-blue-700 text-center mx-auto scale-75 px-4 py-2 underline"
        >
          Delete Form
        </button>
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
     

    </div>
  );
}

export default WorkExperienceDetails;
