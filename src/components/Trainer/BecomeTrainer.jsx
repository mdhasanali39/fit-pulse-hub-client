import BecomeTrainerForm from "../Form/BecomeTrainerForm";
import Cover from "../Shared/Cover/Cover";

const BecomeTrainer = () => {
    return (
        <div>
            <Cover 
            heading_first="become"
            heading_last="trainer"
            image="https://i.ibb.co/9GgVb1b/indian-man-doing-excercisses-special-equipment-gym-with-personal-trainer.jpg"
            subHeading="A trainer more stronger than others"
            color="text-white"
            ></Cover>
            {/* become a trainer form  */}
            <div>
                <BecomeTrainerForm></BecomeTrainerForm>
            </div>
        </div>
    );
};

export default BecomeTrainer;