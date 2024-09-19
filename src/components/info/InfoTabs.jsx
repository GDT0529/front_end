import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export function InfoTabs({
  ProfileDescComp,
  PersonalDescComp,
  AddressDescComp,
  EducationDescComp,
}) {
  // Custom Description Components
  const ProfileDesc = () => <ProfileDescComp></ProfileDescComp>;
  const PersonalDesc = () => <PersonalDescComp></PersonalDescComp>;
  const AddressDesc = () => <AddressDescComp></AddressDescComp>;
  const EducationDesc = () => <EducationDescComp></EducationDescComp>;

  const data = [
    {
      label: "Profile",
      value: "Profile",
      desc: ProfileDesc, // Reference the component
    },
    {
      label: "Personal",
      value: "Personal",
      desc: PersonalDesc, // Reference the component
    },
    {
      label: "Address",
      value: "Address",
      desc: AddressDesc, // Reference the component
    },
    {
      label: "Education",
      value: "Education",
      desc: EducationDesc, // Reference the component
    },
  ];

  return (
    <Tabs
      value={data[0].value}
      className="mt-12 flex w-full flex-col items-center"
    >
      <TabsHeader className="flex w-full justify-center">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="text-gray-600">
            <div className="flex w-24 items-center justify-center gap-2 font-bold ">
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc: DescComponent }) => (
          <TabPanel key={value} value={value}>
            <DescComponent />
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default InfoTabs;
