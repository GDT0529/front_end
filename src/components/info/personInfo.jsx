import InfoTabs from './InfoTabs.jsx';
import ArrowToggle from './arrowToggle';
import React, { useState } from 'react';

const PersonInfo = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('Contact Address');

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleAddressChange = (e) => {
    setSelectedAddress(e.target.value);
  };

  const ProfileDesc = () => (
    <div className="relative mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="absolute right-4 top-4">
        <ArrowToggle isCollapsed={isCollapsed} onClick={toggleCollapse} />
      </div>

      {isCollapsed ? (
        <h3 className="text-left text-base font-semibold text-gray-500">
          PROFILE
        </h3>
      ) : (
        <div className="text-left">
          <h3 className="mb-4 text-base font-semibold text-gray-500">
            PROFILE
          </h3>
          <div className="mb-6 flex items-center space-x-8">
            <img
              className="h-24 w-24 rounded-full border border-gray-300"
              src="https://via.placeholder.com/100"
              alt="User avatar"
            />
            {/* <div>
              <p className="text-gray-500">Location</p>
              <h4 className="text-xl font-semibold">Hyderabad</h4>
            </div> */}
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-gray-500">Name</p>
              <h4 className="text-base font-semibold">Maneet Heera</h4>
            </div>
            <div>
              <p className="text-gray-500">Employee ID</p>
              <h4 className="text-base font-semibold">EXA0731</h4>
            </div>
            <div>
              <p className="text-gray-500">Primary Contact No</p>
              <h4 className="text-base font-semibold">7838651157</h4>
            </div>
            <div>
              <p className="text-gray-500">Location</p>
              <h4 className="text-base font-semibold">Hyderabad</h4>
            </div>
            <div>
              <p className="text-gray-500">Company Email</p>
              <h4 className="font-semibold text-blue-600">
                <a href="mailto:maneet@pydatainc.com">maneet@pydatainc.com</a>
              </h4>
            </div>
            <div>
              <p className="text-gray-500">Extension</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const PersonalDesc = () => (
    <div className="relative mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="absolute right-4 top-4">
        <ArrowToggle isCollapsed={isCollapsed} onClick={toggleCollapse} />
      </div>

      {isCollapsed ? (
        <h3 className="text-left text-base font-semibold text-gray-500">
          PERSONAL
        </h3>
      ) : (
        <div className="text-left">
          <h3 className="mb-4 text-base font-semibold text-gray-500">
            PERSONAL
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-gray-500">Blood Group</p>
              <h4 className="text-base font-semibold">AB -ve</h4>
            </div>
            <div>
              <p className="text-gray-500">Date of Birth</p>
              <h4 className="text-base font-semibold">05 SEP 1988</h4>
            </div>
            <div>
              <p className="text-gray-500">Nationality</p>
              <h4 className="text-base font-semibold">Indian</h4>
            </div>
            <div>
              <p className="text-gray-500">Marital Status</p>
              <h4 className="text-base font-semibold">Single</h4>
            </div>
            <div>
              <p className="text-gray-500">Marriage Date</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Spouse</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Place of Birth</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Residential Status</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Father Name</p>
              <h4 className="text-base font-semibold">Satish Heera</h4>
            </div>
            <div>
              <p className="text-gray-500">Religion</p>
              <h4 className="text-base font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Physically Challenged</p>
              <h4 className="text-base font-semibold">No</h4>
            </div>
            <div>
              <p className="text-gray-500">International Employee</p>
              <h4 className="text-base font-semibold">No</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const AddressDesc = () => (
    <div className="relative mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="absolute right-4 top-4">
        <ArrowToggle isCollapsed={isCollapsed} onClick={toggleCollapse} />
      </div>

      {isCollapsed ? (
        <h3 className="text-left text-base font-semibold text-gray-500">
          ADDRESS
        </h3>
      ) : (
        <div className="text-left">
          <h3 className="mb-4 text-base font-semibold text-gray-500">
            ADDRESS
          </h3>

          <div className="mb-6">
            <select
              value={selectedAddress}
              onChange={handleAddressChange}
              className="w-semi rounded border px-4 py-2 font-semibold text-gray-600"
            >
              <option value="Contact Address">Contact Address</option>
              <option value="Home Address">Option 1</option>
              <option value="Office Address">Option 2</option>
            </select>
          </div>

          <div className="mb-4 grid grid-cols-1 gap-6">
            <div>
              <p className="text-gray-500">Address</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-6">
            <div>
              <p className="text-gray-500">Name</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div>
              <p className="text-gray-500">Phone 1</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Phone 2</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Mobile</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Extension</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
            <div>
              <p className="text-gray-500">Fax</p>
              <h4 className="text-lg font-semibold">—</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const EducationDesc = () => (
    <div className="relative mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="absolute right-4 top-4">
        <ArrowToggle isCollapsed={isCollapsed} onClick={toggleCollapse} />
      </div>

      {isCollapsed ? (
        <h3 className="text-left text-base font-semibold text-gray-500">
          EDUCATION
        </h3>
      ) : (
        <div className="text-left">
          <h3 className="mb-4 text-base font-semibold text-gray-500">
            EDUCATION
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-gray-500">Degree</p>
              <h4 className="text-base font-semibold">B.Tech</h4>
            </div>
            <div>
              <p className="text-gray-500">Duration</p>
              <h4 className="text-base font-semibold">2007 - 2011</h4>
            </div>
            <div>
              <p className="text-gray-500">Institute</p>
              <h4 className="text-base font-semibold">GFITM, MDU Haryana</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <InfoTabs
      ProfileDescComp={ProfileDesc}
      PersonalDescComp={PersonalDesc}
      AddressDescComp={AddressDesc}
      EducationDescComp={EducationDesc}
    ></InfoTabs>
  );
};

export default PersonInfo;
