import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../../Shared/Title/Title";
import PackageCard from "./PackageCard";

const BookPackage = () => {
    const [params,setParams] = useSearchParams()
    const navigate = useNavigate()

    const trainer = params?.get("trainer")
    const slot = params?.get("slot")
    // console.log(params?.get('trainer'));

    return (
        <div className="mt-20 mb-10">
            <Title heading_first="choose your" heading_last="membership package" subHeading="Grab a package to start you fitness journey"></Title>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-3/4 mx-auto">
                <PackageCard 
                packageName="Basic"
                price='100'
                facility_1="5 hours access to the gym"
                facility_2="7 gym instrument to use"
                facility_3="4 classes per week"
                facility_4="One month membership"
                facility_5="One personal instructor"
                trainer={trainer}
                slot={slot}
                ></PackageCard>
                <PackageCard 
                packageName="Silver"
                price='150'
                facility_1="Unlimited access to the gym"
                facility_2="20 gym instrument to use"
                facility_3="6 classes per week"
                facility_4="Six month membership"
                facility_5="Two personal instructor"
                trainer={trainer}
                slot={slot}
                ></PackageCard>
                <PackageCard 
                packageName="Gold"
                price='230'
                facility_1="Unlimited access to the gym"
                facility_2="All instrument to use"
                facility_3="9 classes per week"
                facility_4="One year membership"
                facility_5="Four personal instructor"
                trainer={trainer}
                slot={slot}
                ></PackageCard>
            </div>
        </div>
    );
};

export default BookPackage;