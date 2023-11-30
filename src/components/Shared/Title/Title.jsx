
const Title = ({heading_first, heading_last, subHeading, color}) => {
    return (
        <div className="text-center my-5">
            <h2 className="uppercase font-bold text-4xl">
                <span className="text-action-text">{heading_first} </span>
                <span className={`${color ? color : "text-black-text"} `}>{heading_last}</span>
            </h2>
            <h4 className={`${color ? color : "text-black-text"} `}>{subHeading}</h4>
        </div>
    );
};

export default Title;