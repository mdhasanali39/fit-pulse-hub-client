import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const sevenDays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const DailyClassesSchedule = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  


  return (
    <div>
      <Tabs defaultIndex={0} onSelect={(index) => setSelectedIndex(index)}>
        <TabList>
          {sevenDays.map((day, idx) => (
            <Tab key={idx}>{day}</Tab>
          ))}
        </TabList>

        
      </Tabs>
    </div>
  );
};

export default DailyClassesSchedule;
