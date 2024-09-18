import React from 'react';

const DaysInput = ({ formData, handleChange }) => {
  return (
    <div className="sm:col-span-6">
      <label
        htmlFor="days"
        className="block text-base font-semibold leading-6 text-gray-500"
      >
        Days
      </label>
      <div className="mt-2">
        <input
          type="text"
          id="days"
          name="days"
          rows="1"
          value={formData.days}
          onChange={handleChange}
          className="placeholder:text-gray-350 block w-1/4 rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
          required
        ></input>
      </div>
    </div>
  );
};

export default DaysInput;
