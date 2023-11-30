const FeaturesCard = ({image, title, description}) => {

    return (
        <div  className="bg-transparent border my-10 min-w-[400px] p-4 text-center">
            {/* <div>
                <img className="w-9" src="https://i.ibb.co/P67TjCm/muscle-7053338.png"/>
            </div> */}
            <h3 className="text-xl font-semibold text-action-text">{title}</h3>
            <p className="text-black text-start">{description}</p>
        </div>
    );
};

export default FeaturesCard;


  