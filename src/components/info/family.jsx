import InfoTabs from "./InfoTabs.jsx";

const Family = () => {
  const ProfileDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Text */}
        <p className="text-lg text-gray-500">Profile Component.</p>
      </div>
    </div>
  );

  const PersonalDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Text */}
        <p className="text-lg text-gray-500">Personal Component.</p>
      </div>
    </div>
  );

  const AddressDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Text */}
        <p className="text-lg text-gray-500">Address Component.</p>
      </div>
    </div>
  );

  const EducationDesc = () => (
    <div className="mx-auto w-full max-w-5xl justify-center rounded-md bg-white p-10">
      <div className="flex flex-col items-center justify-center">
        {/* Text */}
        <p className="text-lg text-gray-500">Education Component.</p>
      </div>
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

export default Family;
