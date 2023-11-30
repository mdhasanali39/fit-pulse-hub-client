import Title from "../../Shared/Title/Title";
import FeaturesCard from "./FeaturesCard";
import '../../Shared/scrollThumbCustom.css'


const Features = () => {
    return (
        <div className="mb-20">
          <Title heading_first="our" heading_last="Features" subHeading="Some features are featured here"></Title>
            <div className="flex gap-6 flex-nowrap overflow-x-auto scroll-smooth customThumb">
            {
                fetures.map(({title,description,image}, idx) => <FeaturesCard
                 key={idx}
                 title={title}
                 description={description}
                 image={image}
                 ></FeaturesCard>)
            }
            </div>
        </div>
    );
};

export default Features;
//  TODO:   image should be bg image not icon(not png) - add
const fetures = [
    {
      title: 'Bodybuilding Mastery',
      description: 'Sculpt your physique and build strength with our dedicated bodybuilding programs. From targeted muscle development to comprehensive strength training, unlock the secrets to a powerful and well-defined body.',
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
    {
      title: 'Musculation Pro',
      description: "Elevate your musculation game with expert guidance and specialized workouts. Whether you're a novice or seasoned lifter, our programs are designed to optimize muscle growth and enhance your overall strength.",
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
    {
      title: 'Cardio Blitz',
      description: 'Experience the exhilaration of our Cardio Blitz programs, designed to boost endurance and burn calories effectively. From heart-pounding workouts to tailored cardio routines, achieve peak cardiovascular fitness with us.',
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
    {
      title: 'Functional Fitness',
      description: 'Embrace a holistic approach to fitness with our functional training programs. Improve your everyday movements, enhance flexibility, and build a strong foundation for overall wellness with dynamic and purposeful exercises.',
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
    {
      title: 'CrossFit Fusion',
      description: 'Immerse yourself in the dynamic world of CrossFit Fusion. Push your limits with varied, high-intensity workouts that blend strength, agility, and endurance. Join a community that thrives on challenge and camaraderie.',
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
    {
      title: 'Lean & Mean Transformation',
      description: 'Achieve a leaner, more defined physique with our transformative programs. Tailored nutrition plans and targeted workouts will guide you towards your weight loss goals, helping you unveil a healthier and more confident version of yourself.',
      image: 'https://i.ibb.co/DLyqXcd/powerful-stylish-bodybuilder-with-tattoo-his-arm-doing-exercises-with-dumbbells-isolated-dark-backgr.jpg',
    },
  ];