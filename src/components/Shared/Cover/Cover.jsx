import Title from "../Title/Title";

const Cover = ({heading_first,heading_last,subHeading,image,color}) => {
  return (
    <div style={{background: `linear-gradient(83deg, rgba(35,35,36,0.5662640056022409) 100%, rgba(112,92,9,0) 100%),URL(${image})`, backgroundSize: 'cover', backgroundRepeat:'no-repeat', backgroundPosition:'top'}} className="h-[400px] flex justify-center items-center ">
      <Title
        heading_first={heading_first}
        heading_last={heading_last}
        color={color}
        subHeading={subHeading}
      ></Title>
    </div>
  );
};

export default Cover;
