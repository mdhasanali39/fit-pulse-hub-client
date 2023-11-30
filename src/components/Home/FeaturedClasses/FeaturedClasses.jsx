import { useQuery } from "@tanstack/react-query";
import { getAllClasses } from "../../../api/classes";
import FeaturedClassesCard from "./FeaturedClassesCard";
import Title from "../../Shared/Title/Title";

const FeaturedClasses = () => {

    const {data:classes = []} = useQuery({
        queryKey: ['classesData'],
        queryFn: async()=> await getAllClasses()
    })

    return (
        <div className="mb-20">
        <Title heading_first="featured" heading_last="classes" subHeading="here we featured some classes"></Title>
        <div className="w-3/4 mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                classes?.slice(0,6).map(classItem => <FeaturedClassesCard key={classItem?._id} classItem={classItem}></FeaturedClassesCard>)
            }
        </div>
            
        </div>
    );
};

export default FeaturedClasses;