import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { setPersonalInformation } from './personalInformationActions';
import { Avatar } from '@mui/material';


function PersonalInformation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.personalInformation);
  const inputRef = useRef(null);

  const handleInputForm = (e) => {
    const { name, value } = e.target;
    dispatch(setPersonalInformation({ ...userInfo, [name]: value }));
  };

  const getFormData = (e) => {
    e.preventDefault();
    console.log("First Name:", userInfo.firstName);
    console.log("Last Name:", userInfo.lastName);
    console.log("Email:", userInfo.email);
    console.log("Mobile:", userInfo.number);
    console.log("Address:", userInfo.address);
    console.log("Pin-Code:", userInfo.pincode);
    console.log("Objective:", userInfo.objective);

    navigate("/work_exprience");
  };

  const handleProfilePhotoClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(setPersonalInformation({ ...userInfo, profilePhoto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center bg-yellow-200">
      <form
        onSubmit={getFormData}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg my-2"
      >
        <div className="font-bold mt-2 text-center scale-125">
          <FontAwesomeIcon icon={faAddressCard} /> Personal Information
        </div>
        <div className="flex flex-col items-center mt-4">
          <Avatar
            sx={{ width: 80, height: 80 }}
            className="cursor-pointer"
            src={userInfo.profilePhoto}
            onClick={handleProfilePhotoClick}
          />
          <button
            type="button"
            onClick={handleProfilePhotoClick}
            className="mt-2 text-blue-500 underline"
          >
            Change Profile Photo
          </button>

          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1">
            <label htmlFor="fname">First Name</label> <br />
            <input
              id="fname"
              name="firstName"
              type="text"
              placeholder="Enter First Name"
              value={userInfo.firstName}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="lname">Last Name</label> <br />
            <input
              id="lname"
              name="lastName"
              type="text"
              placeholder="Enter Last Name"
              value={userInfo.lastName}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>

        <br />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="email">E-mail</label> <br />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              value={userInfo.email}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="mobile">Mobile</label> <br />
            <input
              id="mobile"
              name="number"
              type="text"
              placeholder="Enter Mobile Number"
              value={userInfo.number}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <br />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Enter Address"
              value={userInfo.address}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex-1">
            <label htmlFor="pincode">Pincode</label> <br />
            <input
              id="pincode"
              name="pincode"
              type="text"
              placeholder="Enter PinCode"
              value={userInfo.pincode}
              onChange={handleInputForm}
              className="border rounded p-2 w-full"
            />
          </div>
        </div>
        <br />
        <div className="">
          <label htmlFor="objective">Objective</label> <br />
          <textarea
            className="border rounded p-2 w-full"
            id="objective"
            name="objective"
            rows="4"
            placeholder="Write Here..."
            value={userInfo.objective}
            onChange={handleInputForm}
          />
        </div>
        <br />
        <div className="flex justify-end mt-4 gap-2">
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

export default PersonalInformation;
