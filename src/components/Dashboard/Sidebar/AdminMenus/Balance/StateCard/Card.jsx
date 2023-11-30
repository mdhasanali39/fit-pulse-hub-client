
const Card = ({title,total, icon:Icon}) => {
  return (
    <div style={{background: "linear-gradient(90deg, rgba(13,13,13,1) 32%, rgba(31,77,25,1) 100%)"}} className="stat">
      <div className="stat-figure text-white">
        <Icon size={30}/>
      </div>
      <div className="stat-title text-white">{title}</div>
      <div className="stat-value text-action-text">${total}</div>
    </div>
  );
};

export default Card;
