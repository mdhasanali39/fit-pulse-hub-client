import { useQuery } from '@tanstack/react-query';
import Title from '../../Shared/Title/Title';
import TeamCard from './TeamCard';
import { getTrainers } from '../../../api/trainer';


const Team = () => {

    const {data:trainers = []} = useQuery({
        queryKey: ["trainer"],
        queryFn: async() => await getTrainers()
    })

    console.log(trainers);
    return (
        <div>
            <Title heading_first="Our" heading_last="Team" subHeading="Our Professional Trainer"></Title>
            <div className='w-3/4 mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center'>
                
                {
                    trainers?.slice(0,3).map(({image_url,trainer_name, _id})=><TeamCard key={_id} image={image_url} name={trainer_name} trainerAt="Bodybuilding Mastery" />)
                }
            </div>
        </div>
    );
};

export default Team;