import { useEffect, useState } from "react";
import Title from "../../components/Shared/Title/Title";
import ClassesCard from "./ClassesCard";
import { useQuery } from "@tanstack/react-query";
import { getAllClasses } from "../../api/classes";
import DailyClassesSchedule from "../../components/Classes/DailyClassesSchedule";

const Classes = () => {
  // const [classes, setClasses] = useState([]);

  const {data:classes=[]} = useQuery({
    queryKey:["classes"],
    queryFn: async()=>await getAllClasses()
  })

  return (
    <div className="min-h-[40vh]">
      {/* all classes here  */}
      <div>
        <Title heading_first="Weekly Classes" heading_last="schedule" subHeading="Explore schedule"></Title>
        <DailyClassesSchedule></DailyClassesSchedule>
        <Title
          heading_first="All classes"
          heading_last="here"
          subHeading="All classes we give you"
        ></Title>
        <div className="w-3/4 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {classes.map((classItem, idx) => (
            <ClassesCard key={idx} classItem={classItem}></ClassesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
