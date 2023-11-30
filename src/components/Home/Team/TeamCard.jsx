const TeamCard = ({image,name}) => {
  return (
    <div>
      <div>
        <div className="h-[350px] ">
          <img
            className="h-full object-cover rounded-md"
            src={image}
            alt={name}
          />
        </div>
        <h2 className="text-center text-lg font-semibold mt-2">{name}</h2>
        {/* <p className="font-medium text-center">{trainerAt}</p> */}
      </div>
    </div>
  );
};

export default TeamCard;
