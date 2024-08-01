function EducationDetails({ userInfo, handleInputForm, yearOptions }) {
  return (
    <>
      <div className="scale-100">
        <label htmlFor="domain">Domain</label>
        <input
          className="block border rounded p-2 w-1/2 text-sm"
          type="text"
          name="domain"
          placeholder="Domain"
          value={userInfo.domain}
          onChange={handleInputForm}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4 scale-100">
        <div className="flex-1">
          <label htmlFor="university">University</label>
          <input
            id="university"
            name="university"
            type="text"
            placeholder="Enter University Name"
            value={userInfo.university}
            onChange={handleInputForm}
            className="border rounded p-2 w-full text-sm"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="degree">Degree</label>
          <input
            id="degree"
            name="degree"
            type="text"
            placeholder="Enter your Degree"
            value={userInfo.degree}
            onChange={handleInputForm}
            className="border rounded p-2 w-full text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4 scale-100">
        <div className="flex-1">
          <label htmlFor="startYear" className="flex justify-start text-sm">
            Start Year
          </label>
          <select
            name="startYear"
            value={userInfo.startYear}
            onChange={handleInputForm}
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
        <div className="flex-1">
          <label htmlFor="endYear" className="flex justify-start text-sm">
            End Year
          </label>
          <select
            name="endYear"
            value={userInfo.endYear}
            onChange={handleInputForm}
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
    </>
  );
}

export default EducationDetails;
