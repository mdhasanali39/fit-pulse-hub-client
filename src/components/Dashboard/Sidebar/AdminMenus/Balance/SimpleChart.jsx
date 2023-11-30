import { FaArrowRightLong } from "react-icons/fa6";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const SimpleChart = ({ totalPaidMembersCount, totalSubscribersCount }) => {
  const data = [
    { name: "Total Subscribers", value: totalSubscribersCount },
    { name: "Total Paid Memberships", value: totalPaidMembersCount },
  ];

  const COLORS = ["#E4B802","#232324"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        fontWeight={700}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex justify-center items-center">
      <PieChart width={600} height={350}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="-ml-28">
        <h2 className="flex text-xl text-[#E4B802] font-bold gap-2 items-center ">
          Total Newsletter Subscribers <FaArrowRightLong />{" "}
          {totalSubscribersCount}
        </h2>
        <h2 className="flex text-xl text-[#232324] font-bold gap-2 items-center ">
          Total Paid Memberships <FaArrowRightLong /> {totalPaidMembersCount}
        </h2>
      </div>
    </div>
  );
};

export default SimpleChart;
