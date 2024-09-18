import { useEffect, useState } from 'react';
import LeaveType from './leaveComponents/leaveType.jsx';
import Message from './leaveComponents/message.jsx';
import Date from './leaveComponents/date.jsx';
import Session from './leaveComponents/session.jsx';
import ApplyingTo from './leaveComponents/applyingTo.jsx';
import CcTo from './leaveComponents/ccTo.jsx';
import Reason from './leaveComponents/reason.jsx';
import SubmitCancel from './leaveComponents/submitCancel.jsx';
import LeaveTabs from './leaveTabs.jsx';
import Days from './leaveComponents/days.jsx';
import axios from 'axios';

const CompOffGrant = () => {
  const [formData, setFormData] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    session1: 'Session 1',
    session2: 'Session 2',
    applyingTo: '',
    ccTo: '',
    days: '',
    contactDetails: '',
    reason: '',
    file: null,
  });

  const [ccDropdownOpen, setCcDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStaff, setSelectedStaff] = useState([]);
  const [applyingDropdownOpen, setApplyingDropdownOpen] = useState(false);
  const [selectedApplyingTo, setSelectedApplyingTo] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  const leaveTypes = ['Loss Of Pay', 'Comp - Off', 'Casual Leave'];
  const sessions = ['Session 1', 'Session 2'];

  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    // 使用 axios 发送 GET 请求
    axios
      .get('https://66e0a3d32fb67ac16f2a3a49.mockapi.io/applycc')
      .then((response) => {
        // 提取每个对象的 name 并存储到 staffList 中
        const names = response.data.map((item) => item.name);
        setStaffList(names);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); // 空数组作为依赖项，确保只在组件挂载时运行一次

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleStaffSelect = (staff) => {
    if (selectedStaff.includes(staff)) {
      setSelectedStaff(selectedStaff.filter((item) => item !== staff));
    } else {
      setSelectedStaff([...selectedStaff, staff]);
    }
  };

  const filteredStaff = staffList.filter((staff) =>
    staff.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleApplyingToSelect = (staff) => {
    setSelectedApplyingTo(staff);
    setApplyingDropdownOpen(false);
  };

  const handleHideMessage = () => setShowMessage(false);

  const ApplyDesc = () => (
    <div className="bg-gray-20 relative left-[-20px] mx-auto w-full max-w-4xl justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full justify-center rounded-md bg-white p-6 shadow-lg"
      >
        {/* Message Box */}
        <Message
          message="Compensatory Off is additional leave granted as a compensation for
            working overtime or on an off day."
          showMessage={showMessage}
          handleHideMessage={handleHideMessage}
        />

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-10">
          <h3 className="col-span-full text-lg font-medium leading-7 text-gray-600">
            Applying for Comp. Off Grant
          </h3>
        </div>

        <div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Leave Type */}
            <LeaveType
              leaveType={formData.leaveType}
              leaveTypes={leaveTypes}
              handleSelectChange={handleSelectChange}
            />

            {/* From Date */}
            <Date
              label="From Date"
              name="fromDate"
              value={formData.fromDate}
              handleChange={handleChange}
            />

            {/* Session 1 */}
            <Session
              sessionLabel="session1"
              sessionValue={formData.session1}
              sessions={sessions}
              handleSelectChange={handleSelectChange}
            />

            {/* To Date */}
            <Date
              label="To Date"
              name="toDate"
              value={formData.toDate}
              handleChange={handleChange}
            />

            {/* Session 2 */}
            <Session
              sessionLabel="session2"
              sessionValue={formData.session2}
              sessions={sessions}
              handleSelectChange={handleSelectChange}
            />

            {/* Days */}
            <Days formData={formData} handleChange={handleChange} />

            {/* Applying to */}
            <ApplyingTo
              applyingDropdownOpen={applyingDropdownOpen}
              setApplyingDropdownOpen={setApplyingDropdownOpen}
              selectedApplyingTo={selectedApplyingTo}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filteredStaff={filteredStaff}
              handleApplyingToSelect={handleApplyingToSelect}
            />

            {/* CC to */}
            <CcTo
              ccDropdownOpen={ccDropdownOpen}
              setCcDropdownOpen={setCcDropdownOpen}
              selectedStaff={selectedStaff}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filteredStaff={filteredStaff}
              handleStaffSelect={handleStaffSelect}
            />

            {/* Reason */}
            <Reason reason={formData.reason} handleChange={handleChange} />

            {/* Submit and Cancel Buttons */}
            <SubmitCancel
              onSubmit={handleSubmit}
              onCancel={() => {
                // cancel logic, resetting formData
                setFormData({
                  leaveType: '',
                  fromDate: '',
                  toDate: '',
                  session1: 'Session 1',
                  session2: 'Session 2',
                  applyingTo: '',
                  ccTo: '',
                  contactDetails: '',
                  reason: '',
                  file: null,
                });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );

  const PendingDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/leave_calendar.jpg"
          className="h-96 w-96 rounded-lg object-contain"
          alt="Leave Calendar"
        />
        {/* Text */}
        <p className="text-lg text-gray-500">
          It's empty here! Your pending leave requests will appear here.
        </p>
      </div>
    </div>
  );

  const HistoryDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        <img
          src="/leave_calendar.jpg"
          className="h-96 w-96 rounded-lg object-contain"
          alt="Leave Calendar"
        />
        {/* Text */}
        <p className="text-lg text-gray-500">
          There are no past records of any leave transaction made by you
        </p>
      </div>
    </div>
  );

  return (
    <LeaveTabs
      ApplyDescComp={ApplyDesc}
      PendingDescComp={PendingDesc}
      HistoryDescComp={HistoryDesc}
    ></LeaveTabs>
  );
};

export default CompOffGrant;

