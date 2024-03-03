import { useQuery } from "@tanstack/react-query";
import { getAllClasses } from "../../../../api/classes";
import ClassesCard from "../../../../pages/Classes/ClassesCard";
import Title from "../../../Shared/Title/Title";

const RecommendedClasses = () => {
  const { data: classes = [] } = useQuery({
    queryKey: ["recommendedClasses"],
    queryFn: async () => getAllClasses(),
  });
  return (
    <div>
      <Title
        heading_first="recommended"
        heading_last="classes"
        subHeading="some recommendation for give some better to you"
      ></Title>

      <div className="w-3/4 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
        {classes.slice(3, 8).map((classItem, idx) => (
          <ClassesCard
            key={idx}
            classItem={classItem}
            recommendedClass={true}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default RecommendedClasses;
