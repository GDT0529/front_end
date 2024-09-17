import  { useState, useEffect, useMemo, useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
import GlobalContext from "../../GlobalContext";
import ComponentNav from '../componentNav.jsx';
import { getShift,createShiftRecord } from "../../service/ShiftService";

const HomeComponent = () => {
  const navigate = useNavigate();
  const {user, isSwipeStarted, setIsSwipeStarted, swipeStartTime, setSwipeStartTime} = useContext(GlobalContext)
  const [shiftRecord, setShiftRecord] = useState(null);
  const [shiftData, setShiftData] = useState(null);

  const startSwip = (e) => {
    e.preventDefault();
    setIsSwipeStarted(true);
    setSwipeStartTime(new Date());
  }
  const endSwip = (e) => {
    e.preventDefault();
    setShiftRecord((prev) => {
      const newShiftRecord = {...prev, 
        startTime: swipeStartTime.toISOString(),
        swipeType: shiftData.shiftType,
        endTime: new Date().toISOString()};
      createShiftRecord(newShiftRecord).then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    });
    
    setIsSwipeStarted(false);
    setSwipeStartTime(null);
  }

  const getShiftData = (e) => {
    e.preventDefault();
    navigate("/swipe", { state: { shiftData: shiftData, swipeStartTime: swipeStartTime?swipeStartTime.toLocaleTimeString():"" } });
  };
  
  const piechartdata = useMemo(
    () => ({
      labels: ["Engineering", "Marketing"],
      datasets: [
        {
          data: [100],
          backgroundColor: ["black"],
          borderColor: "black",
          weight: 0.1,
          spacing: 0,
        },
        {
          data: [95, 5],
          backgroundColor: ["#FF6384", "#36A2EB"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB"],
          borderWidth: 0,
          borderColor: "transparent",
          weight: 0.5,
          spacing: 5,
        },
        {
          data: [100],
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          weight: 0.4,
        },
      ],
    }),
    []
  );
  const piechartoptions = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      cutout: "10%",
      plugins: {
        legend: {
          position: "right",
        },
      },
    }),
    []
  );
  ChartJS.register(ArcElement);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    getShift(user.userId).then((response) => {
      setShiftData(response.data._embedded.shifts[0]);
      // navigate("/swipe", { state: { shiftData: response.data._embedded.shifts[0], swipeStartTime: swipeStartTime?swipeStartTime.toLocaleTimeString():"" } });
    })
    .catch((error) => {
      console.log(error);
    });
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
  const homeContentComponent = () => (
    <div className="container mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="text-left">
        <h2 className="text-3xl font-bold">Good Evening</h2>
        <p className="mt-2">If not us, who? If not now, when?</p>
        <p className="mt-2 font-semibold">- JOHN F. KENNEDY</p>
      </div>
  
      {/* Right Column */}
      <div className="flex justify-end">
        <img
          src="/home-img.jpg"
          alt="Review"
          className="w-full h-auto mb-4"
        />
      </div>
    </div>
  
    {/* Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {/* Review Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">Review</h5>
        <img
           src="/home-review.jpg"
          alt="Review"
          className="w-full h-auto mt-4"
        />
        <p className="text-gray-500 mt-2">Hurrah! You've nothing to review.</p>
      </div>
  
      {/* Date and Time Card */}
      <div className="bg-indigo-100 shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">4 September 2024</h5>
        <p className="text-gray-500 mt-2 text-sm font-light">
          Wednesday | 06:35 PM to 03:35 AM
        </p>
        <p className="text-5xl font-bold mt-4">{currentTime.toLocaleTimeString()}</p>
  
        <div className="flex justify-between items-center mt-4">
          <button
            className="text-indigo-600 underline"
            onClick={getShiftData}
          >
            View Swipes
          </button>
          {isSwipeStarted ? (
            <button
              onClick={endSwip}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Sign Out
            </button>
          ) : (
            <button
              onClick={startSwip}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Sign In
            </button>
          )}
        </div>
      </div>
  
      {/* Upcoming Holidays Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">Upcoming Holidays</h5>
        <div className="text-gray-500 mt-4 space-y-4 text-left">
          <div>
            <b>28 Nov</b> Thursday <br /> Thanksgiving
          </div>
          <div>
            <b>25 Dec</b> Wednesday <br /> Christmas Day
          </div>
        </div>
      </div>
    </div>
  
    {/* Second Row of Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
      {/* IT Declaration Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">IT Declaration</h5>
        <p className="text-gray-500 mt-2">Hurrah! Considered your IT declaration for Aug 2024.</p>
        <button className="mt-4 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg">
          View
        </button>
      </div>
  
      {/* Payslip Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">Payslip</h5>
        <div className="flex justify-between items-center mt-4">
          <div className="w-2/3">
            <Pie data={piechartdata} options={piechartoptions} />
          </div>
          <div className="text-right w-1/3">
            <p className="font-bold">Aug 2024</p>
            <p className="font-bold">
              21 <br />
              Paid Days
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          {/* Gross Pay */}
          <div className="flex justify-between">
            <div className="w-2">
              <div className="bg-black h-6"></div>
            </div>
            <p>Gross Pay</p>
            <p>₹*****</p>
          </div>
  
          {/* Deduction */}
          <div className="flex justify-between">
            <div className="w-2">
              <div className="bg-green-200 h-6"></div>
            </div>
            <p>Deduction</p>
            <p>₹*****</p>
          </div>
  
          {/* Net Pay */}
          <div className="flex justify-between">
            <div className="w-2">
              <div className="bg-blue-500 h-6"></div>
            </div>
            <p>Net Pay</p>
            <p>₹*****</p>
          </div>
        </div>
  
        <div className="flex justify-between items-center mt-4">
          <Link to="/download" className="text-indigo-600 underline">
            Download
          </Link>
          <Link to="/salary" className="text-indigo-600 underline">
            Show Salary
          </Link>
        </div>
      </div>
  
      {/* Quick Access Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">Quick Access</h5>
        <div className="flex justify-between">
          <div className="space-y-2 text-left font-bold text-sm">
            <p>Reimbursement Payslip</p>
            <p>IT Statement</p>
            <p>YTD Reports</p>
            <p>Loan Statement</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-sm">
            Use quick access to view important salary details.
          </div>
        </div>
      </div>
  
      {/* POI Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">POI</h5>
        <div className="flex items-center mt-4">
          <img
            src="/home-POI.jpg"
            alt="POI"
            className="w-12 h-16"
          />
          <p className="text-gray-500 ml-4">
            Hold on! You can submit your Proof of Investment (POI) once released.
          </p>
        </div>
      </div>
  
      {/* Track Card */}
      <div className="bg-white shadow rounded-lg p-6">
        <h5 className="text-xl font-semibold">Track</h5>
        <img
          src="/home-track.jpg"
          alt="Track"
          className="w-52 h-auto mt-4"
        />
        <p className="text-gray-500 mt-2">All good! You've nothing to track.</p>
      </div>
    </div>
  </div>
  );

  return (
    <main className="flex-1 bg-gray-100 p-6">
        <ComponentNav title="Home"  navComponent={homeContentComponent}/>
    </main>
  );
};

export default HomeComponent;
